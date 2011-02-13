/* DO NOT MODIFY. This file was compiled Sun, 13 Feb 2011 23:00:40 GMT from
 * /Users/smoku/Rails/examples/backbone.js/app/coffeescripts/application.coffee
 */

var Comment, Comments, Home;
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
Comment = (function() {
  function Comment() {
    Comment.__super__.constructor.apply(this, arguments);
  }
  __extends(Comment, Backbone.Model);
  Comment.prototype.name = 'comment';
  Comment.prototype.url = function() {
    if (this.id) {
      return "/comments/" + this.id;
    } else {
      return "/comments";
    }
  };
  Comment.prototype.change = function() {
    return $('#comments').html("<p><a href='#show/" + this.id + "'>" + (this.get('title')) + "</a></p>");
  };
  return Comment;
})();
Comments = (function() {
  function Comments() {
    Comments.__super__.constructor.apply(this, arguments);
  }
  __extends(Comments, Backbone.Collection);
  Comments.prototype.model = Comment;
  Comments.prototype.url = '/comments';
  Comments.prototype.refresh = function(models) {
    $('#comments').html('');
    return _.each(models, function(model) {
      return $('#comments').append("<p><a href='#show/" + model.comment.id + "'>" + model.comment.title + "</a></p>");
    });
  };
  return Comments;
})();
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
    this.comments = new Comments();
    return this.comments.fetch();
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