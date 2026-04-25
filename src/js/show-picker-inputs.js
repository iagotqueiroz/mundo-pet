dateInputs = document.querySelectorAll(".date-input");
const input = document.querySelectorAll('.btnAbrir');

dateInputs.forEach((dateInput, index) => {
    dateInput.addEventListener("pointerdown", () => {
        input[index].showPicker()
    })
})