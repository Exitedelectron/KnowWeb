function accedi() {
  document.getElementById('auth_form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('log_1').value;
    const password = document.getElementById('log_2').value;

    fetch('https://tuo-backend-url/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Login effettuato con successo!') {
          document.getElementById('successMessage').classList.remove('hidden');
        } else {
          alert('Username o password non corretti!');
        }
      });
  });
}