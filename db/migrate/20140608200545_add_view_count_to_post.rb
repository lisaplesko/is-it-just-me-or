class AddViewCountToPost < ActiveRecord::Migration
  def change
    change_table :posts do |t|
      t.integer :view_counter, default: 0
    end
  end
end
