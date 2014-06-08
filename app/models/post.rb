class Post < ActiveRecord::Base
  has_many :comments
  belongs_to :user
  belongs_to :category

  def self.count_comments
    self.comments.count
  end

end
