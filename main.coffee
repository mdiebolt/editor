# Get stuff from our env
{source:files, distribution} = ENV

# TODO: Consider passing root from env for components
$root = $('body')

# Apply our styles
if styleContent = distribution["style.css"]?.content
  $root.append $("<style>",
    html: styleContent
  )

# Init Github access token stuff
Gistquire.onload()

# Github api
github = new Github
  auth: "oauth"
  token: localStorage.authToken
  
# TODO: Real branch and repo info, maybe from ENV
branch = "master"
userName = "STRd6"
repoName = "editor"
repo = null

errors = Observable([])
notices = Observable(["Loaded!"])

builder = Builder
  errors: errors
  notices: notices

actions =
  save: ->
    notices ["Saving..."]
    
    Actions.save
      owner: userName
      repo: repoName
      fileData: filetree.data()
      builder: builder
    .then ->
      notices ["Saved and published!"]

  new: ->
    if name = prompt("File Name", "newfile.coffee")
      filetree.files.push File
        filename: name
        content: ""

  run: ->
    Actions.run({builder, filetree})

  load_repo: ->
    repoName = prompt("Github repo", "STRd6/matrix.js")
    
    if repoName
      [userName, repoName] = repoName.split("/")
    else
      errors ["No repo given"]

      return
    
    # Decode all content in place
    processDirectory = (items) ->
      items.each (item) ->
        return item unless item.content
        
        item.content = Base64.decode(item.content)
        item.encoding = "raw"
    
    Gistquire.latestTree
      branch: "master"
      repo: repoName
      owner: userName
      success: (data) ->
        notices []
        
        treeFiles = data.tree.select (file) ->
          file.type is "blob"
        
        # Gather the data for each file
        async.map treeFiles, (datum, callback) ->
          Gistquire.api datum.url,
            success: (data) ->
              callback(null, Object.extend(datum, data))
            error: (error) ->
              callback(error)

        , (error, results) ->
          notices ["Radical!"] 
          if error
            errors [error]
            return

          files = processDirectory results
          
          notices [
            files
          ].map (item) ->
            JSON.stringify(item, null, 2)
            
          filetree.load files
      error: (error) ->
        errors [error]

filetree = Filetree()
filetree.load(files)

filetree.selectedFile.observe (file) ->
  root = $root.children(".main")
  root.find(".editor-wrap").hide()
  
  if file.editor
    file.editor.trigger("show")
  else
    root.append(HAMLjr.templates.editor())
    file.editor = root.find(".editor-wrap").last()
    
    editor = TextEditor
      text: file.content()
      el: file.editor.find('.editor').get(0)
      mode: file.mode()

    file.editor.on "show", ->
      file.editor.show()
      editor.editor.focus()
  
    editor.text.observe (value) ->
      file.content(value)
      
      # Autorun
      # actions.run()

$root
  .append(HAMLjr.templates.main(
    filetree: filetree
    actions: actions
    notices: notices
    errors: errors
  ))

Gistquire.api "rate_limit", 
  complete: (request, status) ->
    $root.append HAMLjr.templates.github_status
      request: request

if loadId = window.location.href.match(/loadId=(\d+)/)?[1]
  actions.load(null, loadId)
