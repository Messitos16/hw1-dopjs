const inputField = document.getElementById('inputField');
const emailField = document.getElementById('emailField');

inputField.addEventListener('input', function() {
  const value = inputField.value.trim();
  const isValidURL = /^https?:\/\/.+?\..+$/i.test(value);
  const isValidEmail = /.+@.+\..+/i.test(value);

  if (isValidURL) {
    inputField.classList.remove('invalid');
    inputField.classList.add('valid');
  } else {
    inputField.classList.remove('valid');
    inputField.classList.add('invalid');
  }

  if (isValidEmail) {
    emailField.classList.remove('invalid');
    emailField.classList.add('valid');
  } else {
    emailField.classList.remove('valid');
    emailField.classList.add('invalid');
  }
});