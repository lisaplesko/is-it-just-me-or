class AddRelationshipsBetweenUsersandPosts < ActiveRecord::Migration
  def change
    change_table :posts do |t|
      t.references :user, index: true
    end
  end
end
