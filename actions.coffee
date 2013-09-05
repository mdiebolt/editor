publish = ({builder, fileData, repo, owner, branch}) ->
  branch ?= "master"
  message = "Built #{branch} in browser in strd6.github.io/tempest"

  if branch is "master"
    path = "index.html"
  else
    path = "#{branch}.html"

  # Assuming git repo with gh-pages branch
  publishBranch = "gh-pages"
  
  builder.build fileData, (build) ->
    # create <ref>.html in gh-pages branch
    Gistquire.writeFile
      repo: repo
      owner: owner
      path: path
      content: Base64.encode(builder.standAloneHtml(build))
      branch: publishBranch
      message: message

commit = ({fileData, repo, owner, branch, message}) ->
  Gistquire.commitTree
    owner: owner
    repo: repo
    tree: fileData
    message: message

@Actions =
  save: (params) ->
    commit(params)
      .then ->
        publish(params)

  run: ({builder, filetree}) ->
    builder.build filetree.data(), (build) ->
      if configData = build.source["pixie.json"]?.content
        config = JSON.parse(configData)
      else
        config = {}
      
      sandbox = Sandbox
        width: config.width
        height: config.height
      
      sandbox.document.open()
      sandbox.document.write(builder.standAloneHtml(build))

      sandbox.document.close()

      builder.I.notices? ["Running!"]
      # TODO: Catch and display runtime errors