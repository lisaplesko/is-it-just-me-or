class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  # GET /posts
  # GET /posts.json
  def index
    if params[:user_id].nil?
      @posts = Post.all
    else
      @posts = User.find(params[:user_id]).posts
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @comment = Comment.new(post: @post)
  end

  # GET /posts/new
  def new
    @post = Post.new
    @category_options = Category.all.map{ |category| [category.name, category.id] }

  end

  # GET /posts/1/edit
  def edit
    @post = current_user.posts.find(params[:id])
    @category_options = Category.all.map{ |category| [category.name, category.id] }
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)
    @post.user = current_user

    respond_to do |format|
      if @post.save
        format.html { redirect_to edit_post_path(@post) }
        format.js { redirect_to edit_post_path(@post) }
        # format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    @post = Post.find(params[:id])
    respond_to do |format|
      if @post.update_attributes(post_params)
        # current_user.posts.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully published.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def feed
    @this_post = Post.find(params[:id])
    @this_user = @this_post.user
    # this will be the name of the feed displayed on the feed reader
    @title = "IIJMO RSS: #{@this_post.title}"

    # the news items
    @users_posts = @this_user.posts.all.order("created_at desc")

    # this will be our Feed's update timestamp
    @updated = @users_posts.first.created_at unless @users_posts.empty?

    respond_to do |format|
      format.atom { render :layout => false }

      # we want the RSS feed to redirect permanently to the ATOM feed
      format.rss { redirect_to feed_path(:format => :atom), :status => :moved_permanently }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :body, :category_id)
    end
end
