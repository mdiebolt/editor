The actions bar holds several buttons that can be pressed to perform actions in
the editor.

    - redirect = ->
      - window.location = github.authorizationUrl("bc46af967c926ba4ff87", "gist,repo,user:email")

    .repo_info
      - if repository = @repository()
        %div
          = repository.full_name
          :
          = repository.branch    
      
    .actions
      - actions = @actions

Render a series of buttons, one for each action.

      %span
        - Object.keys(actions).each (name) ->
          %button(click=actions[name])
            = name.titleize()

The issues selector is also rendered in the actions bar.

      %select(value=@issues.currentIssue options=@issues.issues)
        
    .status
      - github = @github
      - if request = github.lastRequest()
        %div
          - if request.getAllResponseHeaders and request.getAllResponseHeaders().match(/X-RateLimit-Limit: 5000/)
            Authenticated Scopes:
            = request.getResponseHeader("X-OAuth-Scopes")
            %br
            Rate Limit Remaining:
            = request.getResponseHeader("X-RateLimit-Remaining")
            = " / 5000"
          - else
            %button(click=redirect) Auth
