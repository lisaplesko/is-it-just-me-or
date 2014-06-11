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

end
