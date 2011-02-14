Backbone.emulateHTTP = true
Backbone.emulateJSON = false

class CommentModel extends Backbone.Model
  name: 'comment'
  url: -> 
    if @id then "/comments/#{@id}" else "/comments"
    
  change: ->
    $('#comments').html("<p><a href='#show/#{@id}'>#{@get('title')}</a></p>")
    

class CommentsCollection extends Backbone.Collection
  model: CommentModel
  url: '/comments'

  refresh: (models)->
    $('#comments').html('')
    _.each(models, (model) ->
      $('#comments').append("<p><a href='#show/#{model.comment.id}'>#{model.comment.title}</a></p>")
    )

Comments = new CommentsCollection()      

class Home extends Backbone.Controller
  routes:
    '': 'index'
    'show/:id': 'show'
  
  index: ->
    $('#commentTemplate').tmpl(data).appendTo('#commentsContener')


  show: (id)->
    @comment = new Comment({id: id})
    @comment.fetch()

$ ->
  new Home
  Backbone.history.start()