class Dispatch < ApplicationRecord
  belongs_to :dispatcher, class_name: "User"
  has_many :trails
  has_many :people, class_name: "User"
end
