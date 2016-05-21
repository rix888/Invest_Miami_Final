class DropIndustriesTable < ActiveRecord::Migration
  def up
     drop_table :industries
   end

   def down
     raise ActiveRecord::IrreversibleMigration
   end
end
