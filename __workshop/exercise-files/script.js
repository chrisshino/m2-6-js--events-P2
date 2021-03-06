// add js here

const form = document.querySelector('form')
const password = document.querySelector('#password')
const passCheck = document.querySelector(`#confirm`)
const errorBox = document.querySelector('.error')
const unmatchedBox = document.querySelector('.unmatched')
const clear = document.querySelector('.clear')
const inputs = document.querySelectorAll('input')


function clearButton () {
  inputs.forEach(el => {
    el.value = ''
  })
  document.querySelector('#terms').click()
}



clear.addEventListener('click', clearButton)


function clearErrors () {
  password.style.border = 'darkgrey 1px solid'
  password.style.boxShadow = 'none'
  passCheck.style.border = 'darkgrey 1px solid'
  passCheck.style.boxShadow = 'none'
}

function handleSubmit(event){
  clearErrors()
  event.preventDefault()
  if (document.getElementById('terms').checked === false) {
    alert('You must agree to the terms')
  }
  else if (password.value.length < 10) {
    errorBox.innerText = 'Your password is too short! Please provide a password that is at least 10 characters long.'
    errorBox.style.display = 'block'
    password.style.border = '5px red solid'
    password.style.boxShadow = '0 0 10px darkblue'
  }
  else if (password.value.length !== passCheck.value.length) {
    errorBox.innerText = 'Your passwords did not match! Please check again and re-submit.'
    errorBox.style.display = 'block'
    passCheck.style.border = '5px red solid'
    passCheck.style.boxShadow = '0 0 10px darkblue'
  }
  else {
    alert('Success')
  }
} 

form.addEventListener('submit', handleSubmit)