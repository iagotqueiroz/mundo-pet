import dayjs from "dayjs";

const dateInputs = document.querySelectorAll('input[type="date"]');

const hoje = dayjs().format('YYYY-MM-DD');

console.log(hoje);

dateInputs.forEach(input => {
    input.setAttribute('min', hoje);
})

// export function configMinTime() {
//     const timeInput = document.querySelector('input[type="time"]');
//     const now = dayjs().format('HH:mm');

//     timeInput.setAttribute('min', now)

// }