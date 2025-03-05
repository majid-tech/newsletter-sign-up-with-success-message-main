const successMessageContainer = document.getElementById('success-message-container');
const dismissButton = document.getElementById('dismiss-button');
const email = document.getElementById('email');
const form = document.getElementById("form");
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
// Validate email address

function validateEmail(){
    if(email.validity.valueMissing){
        errorMessage.innerHTML = 'Email required';
    } else if(email.validity.typeMismatch){
        errorMessage.innerHTML = 'valid email required';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();
    if(email.validity.valid){
        successMessageContainer.style.display = 'block';
        successMessage.innerHTML = `A confirmation email has been sent to ${email.value}.
      Please open it and click the button inside to confirm your subscription.`
    }
});

// Hide success message when clicking dismiss button
dismissButton.addEventListener('click', () => {
    successMessageContainer.style.display = 'none';
});
