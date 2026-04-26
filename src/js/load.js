import { scheduleFetchByDay } from "./schedule-fetch-by-day"
import { scheduleShow } from './show.js'
const selectedDate = document.querySelector('#date-input')

selectedDate.addEventListener("change", async () => {
    const date = selectedDate.value

    // Buscas na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    // Exibe os agendamentos
    scheduleShow({dailySchedules})


})