class AddProfilePictureToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :profile_url
    end
  end
end
