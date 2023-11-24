
const email = document.getElementById('email')
let emailError = document.querySelector('#email + span.error')


//! EMAIL 
email.addEventListener('input', (event) => {
if(email.validity.valid){
    emailError.textContent = ''
    email.classList.add('valid')
} else{
    showEmailError()
}
})

function showEmailError() {
    if (email.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`
    }
}

//! Country 
const country = document.getElementById('country')
let countryError = document.querySelector('#country + span.error')


country.addEventListener('input', (event) => {
    if(country.validity.valid){
        countryError.textContent = ''
        country.classList.add('valid')
    } else{
        showCountryError()
    }
    })
    
    function showCountryError() {
        if (country.validity.valueMissing) {
          // If the field is empty,
          // display the following error message.
          countryError.textContent = "You need to enter country.";
        } else if (country.validity.tooShort) {
          // If the data is too short,
          // display the following error message.
          countryError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`
        }
    }



//! Zip Code 


const zipCode = document.getElementById('zip_code')
let zipCodeError = document.querySelector('#zip_code + span.error')
let minLength = 5;

zipCode.addEventListener('input', (event) => {
if(zipCode.value.length >= minLength){
    zipCodeError.textContent = ''
    zipCode.classList.add('valid')
} else{
    showZipCodeError()
}
})

function showZipCodeError() {
    
    if (zipCode.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      zipCodeError.textContent = "You need to enter an Zip Code.";
    } 
     else if (zipCode.value.length <= minLength) {
      // If the data is too short,
      // display the following error message.
      zipCodeError.textContent = `Zip Code should be at least ${minLength} characters; you entered ${zipCode.value.length}.`
    }
}

//! PASSWORD

const password = document.getElementById('password')
let passwordError = document.querySelector('#password + span.error')

password.addEventListener('input', (event) => {
    if(password.validity.valid){
        passwordError.textContent = ''
        password.classList.add('valid')
    } else{
        showPasswordError()
    }
    })
    
    function showPasswordError() {
        if (password.validity.valueMissing) {
          // If the field is empty,
          // display the following error message.
          passwordError.textContent = "You need to enter a password.";
        }  else if (password.validity.tooShort) {
          // If the data is too short,
          // display the following error message.
          passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`
        }
    }


    //! CONFIRM PASSWORD
const confirmPassword = document.getElementById('confirm_password')
let confirmPasswordError = document.querySelector('#confirm_password + span.error')

confirmPassword.addEventListener('input', (event) => {
    if(confirmPassword.value === password.value){
        confirmPasswordError.textContent = ''
        confirmPassword.classList.add('valid')
    } else{
        showConfirmPasswordError()
    }
    })
    
    function showConfirmPasswordError() {
        if (confirmPassword.validity.valueMissing) {
          // If the field is empty,
          // display the following error message.
          confirmPasswordError.textContent = "You need  confirm password.";
        }  else  {
          // If the data is too short,
          // display the following error message.
          confirmPasswordError.textContent = 'Password don\'t Confirmed .'
        }
    }

    //! FORM SUBMIT
    const form = document.querySelector('form')
    const confirmBtn = document.querySelector('button')

    form.addEventListener("submit", (event) => {
        // if the email field is valid, we let the form submit
        if (!email.validity.valid || !country.validity.valid || !zipCode.validity.valid || !password.validity.valid || !confirmPassword.validity.valid ) {
          // If it isn't, we display an appropriate error message
            showCountryError()
            showEmailError()
            showZipCodeError()
            showPasswordError()
            showConfirmPasswordError()
          // Then we prevent the form from being sent by canceling the event
          event.preventDefault();
        } else{
            console.log(email.value, country.value, zipCode.value, password.value)
            email.value = ''
            country.value = ''
            zipCode.value = ''
            password.value = ''
            confirmPassword.value = ''
        }

      });

    
    