const successMessageContainer = document.getElementById('success-message-container');
const dismissButton = document.getElementById('dismiss-button');
const email = document.getElementById('email');
const form = document.getElementById("form");
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!email.value.trim()) {
        // If empty, show custom error
        errorMessage.textContent = "Email is required!";
        errorMessage.style.display = "inline"; 
    } else if (!email.validity.valid) {
        // If not a valid email, show error
        errorMessage.textContent = "Please enter a valid email address!";
        errorMessage.style.display = "inline"; 
    } else {
        // If valid, show success message and hide error
        errorMessage.textContent = "";
        successMessageContainer.style.display = 'block';
        successMessage.innerHTML = `A confirmation email has been sent to ${email.value}.
        Please open it and click the button inside to confirm your subscription.`;
    }
});

// Hide success message when clicking dismiss button
dismissButton.addEventListener('click', () => {
    successMessageContainer.style.display = 'none';
});
