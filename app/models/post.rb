class Post < ActiveRecord::Base
# require 'active_support/inflector'
# require 'active_support/core_ext/string'
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

  # def pluralize
  #   ActiveSupport::Inflector.pluralize(self)
  # end

  def self.count_comments
    self.comments.count
  end

  def body_summary
    self.body.split(/[.?!]/)[0].concat('...')
  end

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
