The main editor template renders all the other sub-templates.

    %header
      = require("./actions") actions: @actions, issues: @issues, github: @github, repository: @repository
    .main
      = require("./filetree") @filetree
      %section.editor
      -# TODO: Figure out why we can't just add the notifications view directly
      = @notifications.view.children[0]
      
