class AddFirstNameToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :first_name
    end
  end
end
