class CreateDispatches < ActiveRecord::Migration[5.1]
  def change
    create_table :dispatches do |t|
      t.string :classification
      t.integer :dispatcher_id
      t.string :location
      t.timestamps
    end
  end
end
