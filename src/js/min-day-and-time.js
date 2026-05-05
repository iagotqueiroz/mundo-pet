import dayjs from "dayjs";

const dateInputs = document.querySelectorAll('input[type="date"]');
const timeInputs = document.querySelectorAll('input[type="time"]');

const hoje = dayjs().format('YYYY-MM-DD');

// bloquear datas passadas
dateInputs.forEach(dateInput => {
  dateInput.setAttribute('min', hoje);

  dateInput.addEventListener('change', () => {
    const selectedDate = dateInput.value;
    const now = dayjs();

    timeInputs.forEach(timeInput => {
      if (selectedDate === now.format('YYYY-MM-DD')) {
        // se for hoje → bloqueia horas passadas
        timeInput.setAttribute('min', now.format('HH:mm'));
      } else {
        // se for outro dia → libera tudo
        timeInput.removeAttribute('min');
      }
    });
  });
});