json.extract! @post, :id, :title, :body, :created_at, :updated_at
  json.post_url post_url(post, format: :json)
  json.username post.user.first_name
  json.user_url user_url(post.user_id)

  json.comments post.comments.each do |comment|
    json.extract! comment, :id, :body, :created_at, :updated_at
    json.commenter comment.user.first_name
    json.commenter_url commenter_url(comment.user_id)
  end
end
