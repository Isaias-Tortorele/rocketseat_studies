// Selecionando elementos:
// getElementById (element)
// document.getElementsByClassName (HTMLCollection)
// document.getElementsByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (NodeList)

// Manipulando conteúdo:
// textContent
// innerText
// innerHTML
// value
// setAttribute
// getAttribute
// removeAttribute
// style
// classList (add, remove, toggle)

// Navegando pelos elementos:
// parentNode parentElement
// childNodes children
// firstChild firstElementChild
// lastChild lastElementChild
// nextSibling nextElementSibling
// previousSibling previousElementSibling
// createElement
// append prepend
// insertbefore

// Eventos:
// on..
// event
// onkeyup
// onClick
// onkeydown
// onkeypress
// addEventListener
// function print(){
//   console.log('print')
// }

const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function(){
  if(modalWrapper != 'invisivle'){
    modalWrapper.classList.remove('invisible')
  }
}

document.addEventListener('keydown', function(event){
  const isEscKey = event.key === 'Escape'

  isEscKey ? modalWrapper.classList.add('invisible') : ''
})