class ChangeDueDateToDatetimeInTasks < ActiveRecord::Migration[7.0]
  def change
    remove_column :tasks, :due_date, :date
    add_column :tasks, :due_date, :datetime
  end
end
