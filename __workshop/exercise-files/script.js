// add js here

const form = document.querySelector('form')
const password = document.querySelector('#password')
const passCheck = document.querySelector(`#confirm`)
const errorBox = document.querySelector('.error')
const unmatchedBox = document.querySelector('.unmatched')


function handleSubmit(event){
  event.preventDefault()
  if (document.getElementById('terms').checked === false) {
    alert('You must agree to the terms')
  }
  else if (password.value.length < 10) {
    errorBox.innerText = 'Your password is too short! Please provide a password that is at least 10 characters long.'
    errorBox.style.display = 'block'
    password.style.border = '5px red solid'
    password.style.outline = 'none';
    password.style.boxShadow = '0 0 10px darkblue'
    // console.log(password)
  }
  else if (password.value.length !== passCheck.value.length) {
    errorBox.innerText = 'Your passwords did not match! Please check again and re-submit.'
    errorBox.style.display = 'block'
    passCheck.style.border = '2px red solid'
    passCheck.style.outline = 'none';
    passCheck.style.boxShadow = '0 0 10px darkblue'
  }
  else {
    alert('Success')
  }
} 

form.addEventListener('submit', handleSubmit)