class PostsController < ApplicationController
  def index
    @posts = Post.all
    @num = (1..100).to_a.sample
  end
end
