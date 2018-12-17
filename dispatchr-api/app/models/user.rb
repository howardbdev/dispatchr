class User < ApplicationRecord
  has_many :dispatches, foreign_key: :dispatcher_id

  has_many :user_dispatches
  has_many :assignments, through: :user_dispatches, source: :dispatch  
end
