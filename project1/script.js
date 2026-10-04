const modal = document.getElementById('rentModal');
const openButtons = document.querySelectorAll('.open-rent');
const closeButton = document.querySelector('.modal-close');

openButtons.forEach(function (button) {
  button.onclick = function () {
    modal.classList.add('show');
  };
});

closeButton.onclick = function () {
  modal.classList.remove('show');
};
