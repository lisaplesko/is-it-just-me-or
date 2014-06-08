class Post < ActiveRecord::Base
  has_many :comments
  belongs_to :user
  belongs_to :category

  self.count_comments
    self.comments.count
  end

end
