class HomeController < ApplicationController
  def index
    @comments = Comment.all
  end

end
