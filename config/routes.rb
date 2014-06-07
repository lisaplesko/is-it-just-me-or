Rails.application.routes.draw do
  resources :categories

  resources :comments

  resources :posts

  devise_for :users
end
