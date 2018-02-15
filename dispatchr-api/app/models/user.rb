class User < ApplicationRecord
  has_many :dispatches
  attr_accessor :full_name

  def full_name
    "#{first_name} #{last_name}"
  end
end
