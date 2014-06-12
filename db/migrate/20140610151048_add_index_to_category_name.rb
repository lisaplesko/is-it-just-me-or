class AddIndexToCategoryName < ActiveRecord::Migration
  def change
    change_table :categories do |t|
      t.index :name
    end
    change_table :posts do |t|
      t.index :category_id
    end
  end
end
