const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = event.target.username.value;
  const password = event.target.password.value;
  
  if (username === 'user' && password === '1234') {
    window.location.href = "src/home.html";
  } else {
    alert('Usuário ou senha incorretos.');
  }
});
