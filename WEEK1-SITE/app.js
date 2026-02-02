console.log('app.js loaded');

const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#email');
const message = document.querySelector('#form-message');

if (!form || !emailInput || !message) {
    console.warn("Missing expected elements in the page");
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (!emailInput.validity.valid) {
        message.textContent = "Please enter a valid email address.";
        return;
    }

    message.textContent = `Thanks! We will contact ${email}.`;
    form.reset();
});

const toggle = document.querySelector('#theme-toggle');
if (!toggle) {
    console.warn("Missing #theme-toggle");
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})