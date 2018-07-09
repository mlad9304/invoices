class AddImageDescriptionToPosts < ActiveRecord::Migration[5.2]
  def change
    change_table :posts do |t|
      t.string :description, null: false, default: ""
    end
  end
end
