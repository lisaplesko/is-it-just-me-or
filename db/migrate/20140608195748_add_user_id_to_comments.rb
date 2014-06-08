class AddUserIdToComments < ActiveRecord::Migration
  def change
    change_table :comments do |t|
      t.references :user, index: true
    end
  end
end
