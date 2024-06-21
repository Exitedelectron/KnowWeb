function accedi() {
  const code = document.getElementById('cod_1').value.trim();
  const errorMessage = document.getElementById('Message');
  const errorText = document.getElementById('errorText');

  errorMessage.className = 'hidden';

  const validCodes = [
    "98234", "67384", "76495", "34982", "29834",
    "87439", "56428", "49387", "10583", "23764"
  ];

  if (!code || code.length !== 5 || isNaN(code)) {
    if (code.length !== 5) {
      errorText.textContent = 'Inserisci un codice numerico di 5 cifre valido.';
      errorMessage.classList.add('warning');
    } else {
      errorText.textContent = 'Codice non valido.';
      errorMessage.classList.add('error');
    }
  } else if (validCodes.includes(code)) {
    errorText.textContent = 'Accesso consentito! Aspetta 5 secondi!';
    errorMessage.classList.add('success');
    setTimeout(() => {
      window.location.href = `${code}.html`;
    }, 3000);
  } else {
    errorText.textContent = 'Codice non valido.';
    errorMessage.classList.add('error');
  }

  errorMessage.classList.remove('hidden');
  errorMessage.classList.add('blink');

  setTimeout(() => {
    errorMessage.classList.remove('blink');
  }, 3000);
}