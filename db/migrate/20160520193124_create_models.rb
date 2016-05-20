class CreateModels < ActiveRecord::Migration
  def change
    create_table :models do |t|
      t.string :Post
      t.string :title
      t.text :body
      t.string :photo

      t.timestamps null: false
    end
  end
end
