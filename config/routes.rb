Rails.application.routes.draw do

  root 'home#index'
  get 'categories/top8', to: 'categories#top8'

  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"},
                     controllers: {omniauth_callbacks: "omniauth_callbacks"}


  resources :categories

  resources :posts do
    resources :comments
  end

end
