Rails.application.routes.draw do

  root 'home#index'
  resources :categories
  resources :comments
  resources :posts
  devise_for :users
end
