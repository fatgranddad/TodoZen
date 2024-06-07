// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("DOMContentLoaded", () => {
  const checkDueDates = () => {
    const tasks = document.querySelectorAll('.task-due-date');
    tasks.forEach(task => {
      const dueDate = new Date(task.dataset.dueDate);
      const now = new Date();
      if (dueDate <= now) {
        alert(`Task "${task.dataset.taskName}" is due!`);
      }
    });
  };
  
  setInterval(checkDueDates, 60000); // 1分ごとにチェック
  checkDueDates(); // ページロード時にもチェック
});