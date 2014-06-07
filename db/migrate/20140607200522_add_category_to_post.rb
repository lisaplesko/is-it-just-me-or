class AddCategoryToPost < ActiveRecord::Migration
  def change
    change_table :posts do |t|
      reversible do |dir|
        dir.up {
          t.remove :category
          t.references :category
        }
        dir.down {
          t.remove :category_id
          t.string :category
        }
      end
    end
  end
end
