class AddDefaultProfilePicture < ActiveRecord::Migration
  def up
    change_column_default :users, :profile_url, 'http://t2.tagstat.com/im/people/silhouette_m_300.png'
  end

  def down
    change_column_default :users, :profile_url, nil
  end
end
