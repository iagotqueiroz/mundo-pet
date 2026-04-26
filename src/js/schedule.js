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
    
    } catch (error) {
        console.log(error)
        alert("Erro ao enviar o formulário. Tente novamente.")
    }
})
