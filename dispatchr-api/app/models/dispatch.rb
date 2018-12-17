class Dispatch < ApplicationRecord
  belongs_to :dispatcher, class_name: "User"

  has_many :user_dispatches
  has_many :assignees, through: :user_dispatches, source: :user
end
