const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');

const modalDiv = document.querySelector('.popup-modal');
const backdrop = document.querySelector('.backdrop');

function toggleModal() {
  modalDiv.classList.remove('close');
  backdrop.classList.remove('close');
  modalDiv.classList.add('show');
  backdrop.classList.add('show');
}

function closeModal() {
  modalDiv.classList.remove('show');
  backdrop.classList.remove('show');
  modalDiv.classList.add('close');
  backdrop.classList.add('close');

}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', closeModal);