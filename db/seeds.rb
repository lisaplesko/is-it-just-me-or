# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Conveniently borrowed from http://www.bitrebels.com/social/most-popular-blog-categories-google/
Category.delete_all
Post.delete_all

CATEGORIES = [
    'Economics',
    'Parenting',
    'Career',
    'Politics',
    'Finance',
    'Pets',
    'Gaming',
    'Nature',
    'DIY',
    'Celebrity Gossip',
    'Wine',
    'Medical',
    'Social Media',
    'Cats',
    'Sports',
    'Entertainment',
    'Shopping',
    'Science',
    'Education',
    'Fitness',
    'Business',
    'Money',
    'Dogs',
    'University',
    'Lifestyle',
    'Marketing',
    'History',
    'SEO',
    'Technology',
    'Green',
    'Health',
    'Law',
    'Photography',
    'Movie',
    'Wedding',
    'Food',
    'Design',
    'Travel',
    'Beauty',
    'Real Estate',
    'Car',
    'Fashion',
    'Music'
    ]

CATEGORIES.each do |cat|
  Category.create(name: cat)
end

# Faker data for users
5.times do |user|
    email = Faker::Internet.email
    password = "password"
    username = Faker::Internet.user_name
    new_user = User.create( email: email, password: password, username: username)
end

# Faker data for posts
150.times do |post|
    title = Faker::Lorem.sentence
    body = Faker::Lorem.paragraph(30)
    new_post = Post.create(title: title, body: body)
    Category.all.sample.posts << new_post
    User.all.sample.posts << new_post
end
