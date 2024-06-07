function handleModalUser() {
  const buttons = document.querySelectorAll('.button_modal');

  const modalController = document.querySelector('#modal');
  const close = document.querySelector('.modal_close')

  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
          modalController.showModal();
      })
  }
  close.addEventListener('click', function () {
      modalController.close();
  })
}

handleModalUser()