class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :middle_initial
      t.string :email
      t.string :nsp_number

      t.timestamps
    end
  end
end
