class User < ApplicationRecord

  attr_accessor :full_name

  def full_name
    "#{first_name} #{last_name}"
  end
end
