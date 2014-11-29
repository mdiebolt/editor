The main editor template renders all the other sub-templates.
 
    .main
      = require("./filetree") @filetree
      %section.editor
      -# TODO: Figure out why we can't just add the notifications view directly
      = @notifications.view.children[0]
      