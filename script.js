const form = document.querySelector('form')
const email = document.getElementById('email')
let emailError = document.querySelector('#email + span.error')


//! EMAIL 
email.addEventListener('input', (event) => {
if(email.validity.valid){
    emailError.textContent = ''
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