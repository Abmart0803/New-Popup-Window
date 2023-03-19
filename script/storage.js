const usersform = document.getElementById('form');

function storeData() {
  const userEmail = document.getElementById('email').value;
  const userName = document.getElementById('name').value;
  const userMessage = document.getElementById('message').value;

  const userInput = {
    name: userName,
    email: userEmail,
    meassage: userMessage,
  };

  localStorage.setItem('user', JSON.stringify(userInput));
}

usersform.addEventListener('change', (e) => {
  e.preventDefault(e);
  storeData();
});

const gottenData = JSON.parse(localStorage.getItem('user'));

if (gottenData) {
  document.getElementById('email').value = gottenData.email;
  document.getElementById('name').value = gottenData.name;
  document.getElementById('message').value = gottenData.meassage;
}
