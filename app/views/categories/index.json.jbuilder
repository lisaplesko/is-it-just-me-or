json.array!(@categories) do |category|
  json.extract! category, :id, :name, :created_at, :updated_at
  json.url category_url(category)
  json.category_score category.rank_category(category)

  json.posts category.posts.each do |post|
    json.extract! post, :id, :title, :body, :created_at, :updated_at, :view_counter, :category_id, :user_id
    json.url post_url(post)
    json.username post.user.name
    json.body_summary post.body_summary
    json.user_url user_url(post.user_id)
    json.post_score post.rank_post(post)
    json.post_reading_time post.reading_time
    json.post_time_to_s post.time_to_s
  end

end
