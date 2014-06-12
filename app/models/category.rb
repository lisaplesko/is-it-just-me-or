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
      Category.limit(8)
    end

    def rank_category(category)
      Rails.cache.fetch([:category_rank, category], expires_in: 1.minute) do
      # Algorithm code for ranking category
        total_score = 0
        category.posts.each do |post|
          total_score += post.rank_post(post)
        end
        total_score
      end
    end

end
