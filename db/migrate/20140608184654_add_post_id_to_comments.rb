class AddPostIdToComments < ActiveRecord::Migration
  def change
    change_table :comments do |t|
      t.references :post, index: true
    end
  end
end
