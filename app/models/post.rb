class Post < ActiveRecord::Base
  has_many :comments
  belongs_to :user
  belongs_to :category
  has_attached_file :image, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  },
  default_url: '/images/:style/missing.png'

  delegate :name, :profile_url, to: :user, prefix: true, allow_nil: true

  def self.count_comments
    self.comments.count
  end

  def body_summary
    self.body.split(/[.?!]/)[0].concat('...')
  end

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def increment_counter
    # gets rid of this bad query:
    # UPDATE "posts" SET "updated_at" = $1, "view_counter" = $2 WHERE "posts"."id" = 154  [["updated_at", "2014-06-12 19:09:10.178846"], ["view_counter", 11]]

    # Now better:
    # UPDATE "posts" SET "view_counter" = COALESCE("view_counter", 0) + 1 WHERE "posts"."id" = 154
    Post.increment_counter :view_counter, self.id
  end

  def rank_post(post)
    Rails.cache.fetch([:post_rank, post], expires_in: 1.minute) do
      # Algorithm code for ranking posts
      num_views = post.view_counter
      num_comments = post.comments_count
      modifier = 500
      if(num_views > 0)
        return num_views + num_comments + (num_comments/num_views * modifier)
      else
        return 0
      end
    end
  end

  def reading_time
    word_count = self.body.split(' ').count
    minutes = word_count / 200
    seconds = word_count % 200 / (200.0 / 60.0)
    ((minutes * 60) + seconds).round
  end

  def time_to_s
    word_count = self.body.split(' ').count
    if(word_count > 200)
      minutes = word_count / 200
      seconds = (word_count % 200) / (200.0 / 60.0).round
      minutes.to_s.concat(" Minute".pluralize(minutes)) + ' ' + seconds.to_s.concat(" Second".pluralize(seconds))
    else
      seconds = ((word_count % 200) / (200.0 / 60.0)).round
      seconds.to_s.concat(" Second".pluralize(seconds))
    end
  end

end
