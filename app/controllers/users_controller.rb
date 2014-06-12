class UsersController < ApplicationController

  def show
    user = User.find(params[:id])
    redirect_to user_posts_path(user_id: user.id)
  end

end
