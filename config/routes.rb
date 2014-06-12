Rails.application.routes.draw do

root 'home#index'
  get 'posts/feed', to: 'posts#feed', as: 'feed'

  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"},
                     controllers: {omniauth_callbacks: "omniauth_callbacks"}




  get 'categories/top8', to: 'categories#top8'
  resources :categories


  resources :users do
    resources :posts
  end

  resources :posts do
    resources :comments
  end

end
