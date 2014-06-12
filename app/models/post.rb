class Post < ActiveRecord::Base
  has_many :comments
  belongs_to :user
  belongs_to :category

  def self.count_comments
    self.comments.count
  end

  def body_summary
    self.body.split(/[.?!]/)[0].concat('...')
  end

  has_attached_file :image, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  },
  default_url: '/images/:style/missing.png'

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def increment_counter
    self.view_counter += 1
    self.save
  end

  def rank_post(post)
    # Algorithm code for ranking posts
    num_views = post.view_counter
    num_comments = post.comments.count
    modifier = 500
    if(num_views > 0)
      return num_views + num_comments + (num_comments/num_views * modifier)
    else
      return 0
    end
  end

end
