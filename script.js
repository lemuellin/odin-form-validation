// ref: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

const email = document.getElementById('email');
const emailError = document.querySelector('.errorEmail');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById('pwdConfirm');
const errorPwdConfirm = document.querySelector('.errorPwdConfirm');

// email.addEventListener('input', (e)=>{
//     if (email.validity.typeMismatch){
//         email.setCustomValidity('Please input a valid email address. :)');
//         email.reportValidity();
//     } else {
//         email.setCustomValidity('');
//     }
// });

email.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.textContent = ''; // Reset the content of the message
      emailError.className = 'error'; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

function showError() {
    if(email.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      emailError.textContent = 'You need to enter an e-mail address.';
    } else if(email.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if(email.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }
  
    // Set the styling appropriately
    emailError.className = 'error active';
  }

  pwdConfirm.addEventListener('input', ()=>{
      console.log(pwd.value);
      console.log(pwdConfirm);
      if (pwdConfirm.value!=pwd.value){
          errorPwdConfirm.textContent = 'please confirm it is the same as the password';
      } else {
        errorPwdConfirm.textContent = '';
      }
  });