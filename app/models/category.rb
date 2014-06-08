class Category < ActiveRecord::Base
    has_many :posts

    self.count_posts
      Post.all.where(category_id: params[:id]).count
    end

    self.count_comments
      @comment_count = 0
      @cat_posts = Post.all.where(category_id: params[:id])
      @cat_posts.each do |post|
        @comment_count += post.count_comments
      end
      return @comment_count
    end

end
