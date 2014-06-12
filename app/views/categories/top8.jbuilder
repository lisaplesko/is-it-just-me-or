json.array!(@top8) do |category|
  json.extract! category, :id, :name, :created_at, :updated_at
  json.url category_url(category)

  json.posts category.posts.each do |post|
    json.extract! post, :id, :title, :body, :created_at, :updated_at, :view_counter, :category_id, :user_id
    json.url post_url(post)
    json.username post.user.name
    json.body_summary post.body_summary
    json.user_url user_url(post.user_id)
    json.score post.rank_post(post)
  end

end

