import dayjs from "dayjs";

// Seleciona as sessões

export const periodMorning = document.getElementById("morning-list");
export const periodAfternoon = document.getElementById("afternoon-list");
export const periodEvening= document.getElementById("eveneing-list");

export function scheduleShow({dailySchedules}) {
    try {
        // Limpa as listas
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodEvening.innerHTML = ""

        // Renderiza os agendamentos por período
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            item.dataset.id = schedule.id
            item.innerHTML = `
                <article class="schedule-item">
                    <div class="flex">
                        <time datetime="" class="schedule-item_date">${schedule.scheduleTime}</time>
                        <p class="schedule-item_name">
                            <strong>${schedule.petName}</strong>
                            / ${schedule.tutorName}
                        </p>
                    </div>

                    <div>
                        <p class="schedule-item_service">${schedule.serviceDescription}</p>
                    </div>

                    <div class="btn-box_remove  flex">
                        <button type="button" class="btn-remove">Remover agendamento</button>
                    </div>
                </article>
            `
            
            const hour = dayjs(`${schedule.scheduleDate} ${schedule.scheduleTime}`).hour()

            if (hour >= 9 && hour <= 12) {
                periodMorning.appendChild(item)
            } else if (hour >= 13 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else if (hour >= 19 && hour <= 21) {
                periodEvening.appendChild(item)
            }
        });

        
    } catch (error) {
        console.log(error)
        alert("Não foi possível exibir os agendamentos")
    }
}