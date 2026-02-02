console.log('app.js loaded');

const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#email');
const message = document.querySelector('#form-message');

if (!form || !emailInput || !message) {
    console.warn("Missing expected elements in the page");
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Clear any previous custom validity message
    emailInput.setCustomValidity('');

    if (!emailInput.validity.valid) {
        if (emailInput.validity.valueMissing) {
            message.textContent = "The email field is required.";
        } else if (emailInput.validity.typeMismatch) {
            message.textContent = "Please enter a valid email address (e.g., name@domain.com).";
        }
        return;
    }

    message.textContent = `Thanks! We will contact ${emailInput.value.trim()}.`;
    form.reset();
});

const toggle = document.querySelector('#theme-toggle');
if (!toggle) {
    console.warn("Missing #theme-toggle");
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})