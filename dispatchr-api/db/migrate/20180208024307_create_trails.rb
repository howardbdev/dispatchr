class CreateTrails < ActiveRecord::Migration[5.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :peak
      t.string :rating
      t.timestamps
    end
  end
end
