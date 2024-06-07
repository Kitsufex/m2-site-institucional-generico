function modalRegister(){
    const modal = document.querySelector("#modalController");
    const button = document.querySelectorAll(".showModal");
    for(let i = 0; i <= button.length; i++){
    button[i].addEventListener("click", () => {
        modal.showModal();
        closeModal()
        
    });
  }
  }
  
  function closeModal(){
    const button = document.querySelector(".closeModal");
    const modal = document.querySelector("#modalController");
    button.addEventListener("click", () => {
        modal.close();
    })
  }
  
  modalRegister()