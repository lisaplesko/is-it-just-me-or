class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
  counter_culture :post
  delegate :email, to: :user, prefix: true, allow_nil: true
end
