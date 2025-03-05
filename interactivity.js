const successMessageContainer = document.getElementById('success-message-container');
const dismissButton = document.getElementById('dismiss-button');
const email = document.getElementById('email');
const form = document.getElementById("form");
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
// Validate email address


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(email.validity.typeMismatch){
        email.setCustomValidity("I am expecting an email address!");
    }
    else if(email.validity.valid){
        successMessageContainer.style.display = 'block';
        successMessage.innerHTML = `A confirmation email has been sent to ${email.value}.
      Please open it and click the button inside to confirm your subscription.`
    }
});

// Hide success message when clicking dismiss button
dismissButton.addEventListener('click', () => {
    successMessageContainer.style.display = 'none';
});
