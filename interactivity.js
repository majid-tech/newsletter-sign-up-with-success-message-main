const successMessageContainer = document.getElementById('success-message-container');
const dismissButton = document.getElementById('dismiss-button');
const email = document.getElementById('email');
const form = document.getElementById("form");
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    // Reset validation state
    email.setCustomValidity("");
    errorMessage.textContent = ""; 

    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    if (!emailValue) {
        errorMessage.textContent = "Email is required!";
        errorMessage.style.display = "inline";
    } else if (!emailRegex.test(emailValue)) {
        errorMessage.textContent = "Please enter a valid email address!";
        errorMessage.style.display = "inline";
    } else {
        errorMessage.style.display = "none";
        successMessageContainer.style.display = 'block';
        successMessage.innerHTML = `A confirmation email has been sent to ${emailValue}.
        Please open it and click the button inside to confirm your subscription.`;
    }
});

// Hide success message when clicking dismiss button
dismissButton.addEventListener('click', () => {
    successMessageContainer.style.display = 'none';
});
