import { periodMorning, periodAfternoon, periodEvening } from './show.js'

[periodMorning, periodAfternoon, periodEvening].forEach((list) => {
  list.addEventListener("click", async (event) => {
    if (event.target.classList.contains("btn-remove")) {
      const li = event.target.closest("li");
      const id = li.dataset.id;

      await fetch(`http://localhost:3333/schedules/${id}`, {
        method: "DELETE",
      });

      li.remove();
    }
  });
});