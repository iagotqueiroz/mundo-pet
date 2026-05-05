import { closeModal } from "./open-and-close-modal.js"
const form = document.querySelector('.input-new-schedule');


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const schedule = {
        tutorName: document.getElementById("tutor-name").value,
        petName: document.getElementById("pet-name").value,
        telephone: document.getElementById("tutor-telephone").value,
        serviceDescription: document.getElementById("service-description").value,
        scheduleDate: document.getElementById("date-input-form").value,
        scheduleTime: document.getElementById("time-input-form").value,
    };


    try {
        const schedulesResponse = await fetch(
      `http://localhost:3333/schedules?scheduleDate=${schedule.scheduleDate}`
    );

    const schedules = await schedulesResponse.json();

    // 2. Verificar conflito de horário
    const duration = 40;

    const newStart = timeToMinutes(schedule.scheduleTime);
    const newEnd = newStart + duration;

    const hasConflict = schedules.some((item) => {
      const existingStart = timeToMinutes(item.scheduleTime);
      const existingEnd = existingStart + duration;

      return newStart < existingEnd && newEnd > existingStart;
    });

    if (hasConflict) {
      alert("Esse horário já está ocupado. Escolha outro horário.");
      return;
    } else if (newStart >= 540 && newStart <= 720 && newEnd <= 720 || 
        newStart >= 780 && newStart <= 1080 && newEnd <= 1080 ||
        newStart >= 1140 && newStart <= 1260 && newEnd <= 1260){

        const response = await fetch("http://localhost:3333/schedules", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(schedule),
        });

        if (!response.ok) {
            throw new Error("Erro ao cadastrar")
        }

        alert("Agendamento casdastrado com sucesso!")
        form.reset()
        closeModal()
    } else {
        alert("Agendamento fora do horário de atendimento.")
    }
    
    } catch (error) {
        console.log(error)
        alert("Erro ao enviar o formulário. Tente novamente.")
    }
})

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}