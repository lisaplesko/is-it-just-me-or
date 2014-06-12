class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :author
  has_many :posts

  def author
    "#{object.post.user.username}"
  end
end
