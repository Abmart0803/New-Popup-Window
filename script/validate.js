const contact = document.getElementById('form');

const isUpperCaseEmail = (email) => {
  if (/[A-Z]/.test(email)) {
    return true;
  }
  return false;
};

contact.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const errorMsg = document.querySelector('.errorsDisplay');
  const validEmail = !isUpperCaseEmail(email);

  if (validEmail) {
    errorMsg.style.display = 'none';
    contact.submit();
  } else {
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = 'Please write email in small letters';
  }
});
