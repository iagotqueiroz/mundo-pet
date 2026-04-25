const btnOpenModal = document.querySelector(".btn-new-schedule");
const modal = document.querySelector('.modal-overlay');
const backgroundOverlay = document.querySelector('.background-overlay');
const closeButton = document.querySelector('.modal-overlay_close_icon');

btnOpenModal.addEventListener('click', () => {
    openModal();
})

export function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hidden');

    backgroundOverlay.classList.add('show');
    backgroundOverlay.classList.remove('hidden');

    document.body.classList.add('no-scroll')
}

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('show');

    backgroundOverlay.classList.add('hidden');
    backgroundOverlay.classList.remove('show');

    document.body.classList.remove('no-scroll')
})