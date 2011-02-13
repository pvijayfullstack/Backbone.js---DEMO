Backbone.emulateHTTP = true
Backbone.emulateJSON = false

class Comment extends Backbone.Model
  url: '/comments'
  name: 'comment'

class Comments extends Backbone.Collection
  model: Comment
  url: '/comments'

  refresh: (models)->
    _.each(models, (model) ->
      $('#comments').append("<p><a href='#show/#{model.comment.id}'>#{model.comment.title}</a></p>")
    )

class Home extends Backbone.Controller
  routes:
    '': 'index'
    'show/:id': 'show'
  
  index: ->
    @comments = new Comments()
    @comments.fetch(
      success: (collection, response) ->
        console.log collection.toJSON()
    )
  
  show: (id)->
    comment = @comments.get(id)
    console.log @comments
    console.log comment

$ ->
  new Home
  Backbone.history.start()