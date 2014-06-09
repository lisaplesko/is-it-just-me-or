class Category < ActiveRecord::Base
    has_many :posts

    def self.count_posts
      Post.all.where(category_id: params[:id]).count
    end

    def self.count_comments_on_posts
      @comment_count = 0
      @cat_posts = Post.all.where(category_id: params[:id])
      @cat_posts.each do |post|
        @comment_count += post.count_comments
      end
      return @comment_count
    end

    def exists?(category_name)
      !Category.find(name: category_name).nil?
    end

    def self.top_8
      Category.all.sample(8)
    end

    def rank_post
      # Algorithm code for ranking posts
      # view_count + comments + (comments/view_count * modifier)
    end

end
