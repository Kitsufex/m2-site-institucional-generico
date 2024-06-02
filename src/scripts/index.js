function handleModal () {
    const button = document.querySelector('.header__button')
    const buttonFaq = document.querySelector('.section__faq--left-button')
    const modalContainer = document.querySelector('.modal__controller')

    button.addEventListener('click', () => {
        modalContainer.showModal()

        closeModal()
    })

    buttonFaq.addEventListener('click', () => {
        modalContainer.showModal()

        closeModal()
    })
}



function closeModal () {
    const button = document.querySelector('.modal__close')
    const modalContainer = document.querySelector('.modal__controller')

    button.addEventListener('click', () => {
        modalContainer.close()
    })
}

handleModal()