dateInputs = document.querySelectorAll(".date-input");
const input = document.querySelectorAll('.btnAbrir');

console.log(dateInputs.length);
console.log(input.length);

dateInputs.forEach((dateInput, index) => {
    dateInput.addEventListener("pointerdown", () => {
        input[index].showPicker()
    })
})