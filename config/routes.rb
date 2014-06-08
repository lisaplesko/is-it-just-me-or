Rails.application.routes.draw do

  root 'posts#index'

  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"},
                     controllers: {omniauth_callbacks: "omniauth_callbacks"}


  resources :categories
  resources :comments
  resources :posts

end
