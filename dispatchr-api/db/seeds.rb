# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do
  User.create(first_name: Faker::FamilyGuy.character, email: Faker::Internet.email, nsp_number: Faker::Number.number(6))
end

15.times do
  Trail.create(name: Faker::StarWars.planet, rating: Faker::Number.number(1), peak: "East")
end

35.times do
  Trail.create(name: Faker::StarWars.planet, rating: Faker::Number.number(1), peak: "West")
end
