The main editor template renders all the other sub-templates.

    %main.main
      = require("./actions") actions: @actions, issues: @issues, github: @github, repository: @repository
      = require("./filetree") @filetree
      -# TODO: Figure out why we can't just add the notifications view directly
      = @notifications.view.children[0]
