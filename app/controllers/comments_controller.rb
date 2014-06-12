class CommentsController < ApplicationController
  before_action :authenticate_user!, only: :create

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)
    @comment.user = current_user
    @comment.save

    respond_to do |format|
      if @comment.save
        format.html { redirect_to post_path(@post), notice: 'Comment was successfully created.' }
        # format.json { render :show, status: :created, location: @comment }
      else
        format.html { render :new }
        # format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    def comment_params
      params.require(:comment).permit(:user, :body)
    end
end
