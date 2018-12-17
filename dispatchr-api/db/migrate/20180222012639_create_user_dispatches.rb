class CreateUserDispatches < ActiveRecord::Migration[5.1]
  def change
    create_table :user_dispatches do |t|
      t.integer :user_id
      t.integer :dispatch_id

      t.timestamps
    end
  end
end
