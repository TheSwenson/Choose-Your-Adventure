var username = window.localStorage.username || 'Guest';

document.getElementById('hello-message').textContent = `Hello, ${username}!`;

var form = document.getElementById('choose-name');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    var desiredName = document.getElementById('name').value;
    if (desiredName.length < 2) {
      alert('Please enter a real name...');
      return;
    }
    username = window.localStorage.username = desiredName;
    window.location.replace('game.html');
  });
}
