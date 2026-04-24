// Importando todas as imagens
import Logo from '../assets/images/logo-mundo-pet.webp';
import IconCalendar from '../assets/icons/calendar-icon.svg';
import IconArrowDown from '../assets/icons/arrow-down.svg';
import IconMorning from '../assets/icons/morning-icon.svg';
import IconAfternoon from '../assets/icons/afternoon.svg';
import IconEvening from '../assets/icons/evening-icon.svg';
import IconPerson from '../assets/icons/person-icon.svg';
import IconPaw from '../assets/icons/paw-icon.svg';
import IconTelephone from '../assets/icons/telephone-icon.svg';
import IconClock from '../assets/icons/clock-icon.svg';
import IconClose from '../assets/icons/close-icon.svg';


// Encontrando as imagens no HTML e atribuindo as imagens importadas

// Iterando em cada tag img que tenha a class [calendar-icon] e colocando o caminho certo da immagem com.
const calendarIcons = document.querySelectorAll(".calendar-icon");
calendarIcons.forEach(icon => {
    icon.src  = IconCalendar;
})

// Iterando em cada tag img que tenha a class [arrow-down-icon] e colocando o caminho certo da immagem com.
const arrowDownIcons  = document.querySelectorAll(".arrow-down-icon");
arrowDownIcons.forEach(icon => {
icon.src = IconArrowDown;
})

const logo = document.getElementById("logo");
logo.src = Logo;

const morningIcon = document.getElementById("morning-icon");
morningIcon.src = IconMorning;

const afternoonIcon = document.getElementById("afternoon-icon");
afternoonIcon.src = IconAfternoon;

const eveningIcon = document.getElementById("evening-icon");
eveningIcon.src = IconEvening;

const personIcon = document.getElementById("person-icon");
personIcon.src = IconPerson

const pawIcon = document.getElementById("paw-icon");
pawIcon.src = IconPaw;

const telephoneIcon = document.getElementById("telephone-icon");
telephoneIcon.src = IconTelephone;

const clockIcon = document.getElementById("clock-icon");
clockIcon.src = IconClock

const closeIcon = document.getElementById("close-icon");
closeIcon.src = IconClose;