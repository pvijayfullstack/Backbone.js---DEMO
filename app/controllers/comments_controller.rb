class CommentsController < ApplicationController

  respond_to :json
  def show
    @comment = Comment.find(params[:id])
    respond_with(@comment)
  end

  def index
    @comments = Comment.all
    respond_with(@comments)
  end

  def create
    @comment = Comment.create(params[:comment])
    respond_with(@comment)
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update_attributes(params[:comment])
    respond_with(@comment)
 end

  def destroy
    @comment = Comment.find(params[:id])
  end

end
