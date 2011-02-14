/* DO NOT MODIFY. This file was compiled Mon, 14 Feb 2011 21:21:29 GMT from
 * /Users/tesla/Sites/Ruby_projects/backbone_demo/app/coffeescripts/application.coffee
 */

var CommentModel, Comments, CommentsCollection, Home;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
Backbone.emulateHTTP = true;
Backbone.emulateJSON = false;
CommentModel = (function() {
  function CommentModel() {
    CommentModel.__super__.constructor.apply(this, arguments);
  }
  __extends(CommentModel, Backbone.Model);
  CommentModel.prototype.name = 'comment';
  CommentModel.prototype.url = function() {
    if (this.id) {
      return "/comments/" + this.id;
    } else {
      return "/comments";
    }
  };
  CommentModel.prototype.change = function() {
    return $('#comments').html("<p><a href='#show/" + this.id + "'>" + (this.get('title')) + "</a></p>");
  };
  return CommentModel;
})();
CommentsCollection = (function() {
  function CommentsCollection() {
    CommentsCollection.__super__.constructor.apply(this, arguments);
  }
  __extends(CommentsCollection, Backbone.Collection);
  CommentsCollection.prototype.model = CommentModel;
  CommentsCollection.prototype.url = '/comments';
  CommentsCollection.prototype.refresh = function(models) {
    $('#comments').html('');
    return _.each(models, function(model) {
      return $('#comments').append("<p><a href='#show/" + model.comment.id + "'>" + model.comment.title + "</a></p>");
    });
  };
  return CommentsCollection;
})();
Comments = new CommentsCollection();
Home = (function() {
  function Home() {
    Home.__super__.constructor.apply(this, arguments);
  }
  __extends(Home, Backbone.Controller);
  Home.prototype.routes = {
    '': 'index',
    'show/:id': 'show'
  };
  Home.prototype.index = function() {
    return $('#commentTemplate').tmpl(data).appendTo('#commentsContener');
  };
  Home.prototype.show = function(id) {
    this.comment = new Comment({
      id: id
    });
    return this.comment.fetch();
  };
  return Home;
})();
$(function() {
  new Home;
  return Backbone.history.start();
});