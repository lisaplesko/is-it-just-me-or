class HomeController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @top_8_categories = Category.top_8
  end

end
