class AddNameToEnterprises < ActiveRecord::Migration
  def change
    add_column :enterprises, :name, :string
  end
end
