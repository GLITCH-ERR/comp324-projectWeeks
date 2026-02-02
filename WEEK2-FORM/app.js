// Grab elements needed from the page.
const form = document.querySelector('#signup-form');
const message = document.querySelector('#form-message');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Elements display the error text for each field.
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

if (
  !form ||
  !message ||
  !nameInput ||
  !emailInput ||
  !passwordInput ||
  !nameError ||
  !emailError ||
  !passwordError
) {
  //throw new Error('Missing expected elements in the page');
  console.warn('Missing expected elements in the page');
}

function setFieldError(input, errorEl, text) {
  // Set/clear field-specific errors.
  // If invalid, set:
  // - aria-invalid="true"
  // - aria-describedby=<id of the element containing the error message>
  // Helps screen readers announce the error in context.
  if (text) {
    input.setAttribute('aria-invalid', 'true');

    // keep help text + error text
    const helpId = input.id + '-help';
    const describedBy = document.getElementById(helpId)
        ? helpId + ' ' + errorEl.id
        : errorEl.id;

    input.setAttribute('aria-describedby', describedBy);
    errorEl.textContent = text;
  } else {
    input.removeAttribute('aria-invalid');

    // restore help text if it exists
    const helpId = input.id + '-help';
    if (document.getElementById(helpId)) {
        input.setAttribute('aria-describedby', helpId);
    } else {
        input.removeAttribute('aria-describedby');
    }
    errorEl.textContent = '';
  }
}

function validate() {
  // Validate all fields and return:
  // - ok: if form = valid
  // - firstInvalid: first input that failed validation (for focusing)
  message.textContent = '';

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Track first invalid field to focus on and fix.
  let firstInvalid = null;

  if (!name) {
    setFieldError(nameInput, nameError, 'Enter your name.');
    firstInvalid ??= nameInput;
  } else if (name.length < 2) {
    setFieldError(nameInput, nameError, 'Name must be at least 2 characters.');
    firstInvalid ??= nameInput;
  } else {
    setFieldError(nameInput, nameError, '');
  }

  if (!email) {
    setFieldError(emailInput, emailError, 'Enter your email address.');
    firstInvalid ??= emailInput;
  } else if (!emailInput.checkValidity()) {
    setFieldError(emailInput, emailError, 'Enter a valid email address (like name@example.com).');
    firstInvalid ??= emailInput;
  } else {
    setFieldError(emailInput, emailError, '');
  }

  if (!password) {
    setFieldError(passwordInput, passwordError, 'Enter a password.');
    firstInvalid ??= passwordInput;
  } else if (password.length < 8) {
    setFieldError(passwordInput, passwordError, 'Password must be at least 8 characters.');
    firstInvalid ??= passwordInput;
  } else {
    setFieldError(passwordInput, passwordError, '');
  }

  return { ok: !firstInvalid, firstInvalid };
}

form.addEventListener('submit', (event) => {
  // Handle submit ourselves to show custom messages.
  event.preventDefault();

  const { ok, firstInvalid } = validate();
  if (!ok) {
    // A simple form-level message to supplement the field-level errors.
    message.textContent = 'Fix the errors and try again.';
    firstInvalid.focus();
    return;
  }

  // Account success path.
  message.textContent = 'Success! Your account was created.';
  form.reset();
});

// Validate while typing
form.addEventListener('input', () => {
  validate();
});