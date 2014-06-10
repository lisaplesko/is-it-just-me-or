json.array!(@top8) do |category|
  json.extract! category, :id, :name, :created_at, :updated_at
  json.url category_url(category)

  json.posts category.posts.each do |post|
    json.extract! post, :id, :title, :body, :created_at, :updated_at, :view_counter, :category_id, :user_id
    json.url post_url(post)
    json.username post.user.username
    json.user_url user_url(post.user_id)
    json.comments post.comments.each do |comment|
      json.comment_body comment.body
    end
  end

end

