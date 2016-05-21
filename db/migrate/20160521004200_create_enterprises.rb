class CreateEnterprises < ActiveRecord::Migration
  def change
    create_table :enterprises do |t|

      t.timestamps null: false
    end
  end
end
