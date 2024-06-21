function accedi() {
  const code = document.getElementById('cod_1').value.trim();
  const errorMessage = document.getElementById('Message');
  const errorText = document.getElementById('errorText');

  errorMessage.className = 'hidden'; // Reset class list

  // Codici validi presi dal file JSON (simulazione di un carico locale)
  const validCodes = ["12345", "54321"];

  if (!code || code.length !== 5 || isNaN(code)) {
    if (code.length !== 5) {
      errorText.textContent = 'Inserisci un codice numerico di 5 cifre valido.';
      errorMessage.classList.add('warning');
    } else {
      errorText.textContent = 'Codice non valido.';
      errorMessage.classList.add('error');
    }
  } else if (validCodes.includes(code)) {
    errorText.textContent = 'Accesso consentito!';
    errorMessage.classList.add('success');
  } else {
    errorText.textContent = 'Codice non valido.';
    errorMessage.classList.add('error');
  }

  errorMessage.classList.remove('hidden');
  errorMessage.classList.add('blink');

  // Rimuovi l'animazione dopo il lampeggio
  setTimeout(() => {
    errorMessage.classList.remove('blink');
  }, 3000); // 0.5s * 5 = 2.5s, aggiungiamo un po' di margine
}