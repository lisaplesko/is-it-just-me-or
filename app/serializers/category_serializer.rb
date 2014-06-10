class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :creator
  has_many :posts

  def creator
    "#{object.post.user.username}"
  end
end
