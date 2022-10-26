const mail= document.getElementById('emailJs')
const password = document.getElementById('passwordJs')
const form = document.getElementById('formJs')
const errorElement = document.getElementById('signInError')

form.addEventListener("submit", (e) => {
  let messages = [] 
  if (mail.value === '' || mail.value == null) {
    messages.push('username or email is required')
  }

  if (password.value.length <= 6) {
    messages.push ('password can not be lesser than six characters')
  }

 
  if (messages.length > 0) {
    e.preventDefault()
   errorElement.innerText = messages.join(' ,  ')
  }
})

