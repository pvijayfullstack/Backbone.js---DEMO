/* DO NOT MODIFY. This file was compiled Sun, 13 Feb 2011 20:13:09 GMT from
 * /Users/tesla/Sites/Ruby_projects/backbone_demo/app/coffeescripts/application.coffee
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
  Comment.prototype.url = '/comments';
  Comment.prototype.name = 'comment';
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
    return _.each(models, function(model) {
      return $('#comments').append("<p><a href='#show/" + model.comment.id + "'>" + model.comment.title + "</a></p>");
    });
  };
  return Comments;
})();
Home = (function() {
  __extends(Home, Backbone.Controller);
  Home.prototype.routes = {
    '': 'index',
    'show/:id': 'show'
  };
  function Home(data) {
    Home.__super__.constructor.call(this, data);
    _.bindAll(this, "index");
    alert('powstałem');
  }
  Home.prototype.index = function() {
    this.test = 'test';
    this.comments = new Comments();
    return this.comments.fetch({
      success: function(collection, response) {
        return console.log(collection.toJSON());
      }
    });
  };
  Home.prototype.show = function(id) {
    var comment;
    alert(this.test);
    comment = this.comments.get(id);
    console.log(this.comments);
    return console.log(comment);
  };
  return Home;
})();
$(function() {
  new Home;
  return Backbone.history.start();
});