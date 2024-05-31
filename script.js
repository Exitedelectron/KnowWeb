document.getElementById("urlForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita il comportamento predefinito di invio del modulo

  var inputUrl = document.getElementById('url').value;
  var knowId = extractKnowId(inputUrl);
  if (knowId) {
    getContentUrl(knowId);
  }
});

function extractKnowId(inputUrl) {
  var match = inputUrl.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
  return match ? match[0] : null;
}

function getContentUrl(knowId) {
  var apiUrl = 'https://apiedge-eu-central-1.knowunity.com/knows/' + knowId;

  document.getElementById('urlForm').style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  var progressBar = document.getElementById('progressBar');
  var progress = 0;
  var interval = setInterval(function () {
    progress += 10; // Aumenta il progresso del 10% ogni secondo
    progressBar.value = progress;
    if (progress >= 100) {
      clearInterval(interval);
      document.getElementById('loading').style.display = 'none';
      document.getElementById('downloadBtn').style.display = 'block';
      document.getElementById('downloadButton').style.display = 'block';
    }
  }, 1000);

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore nella richiesta API: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      var contentUrl = data.documents[0].contentUrl;
      document.getElementById('downloadButton').addEventListener('click', function () {
        downloadPdf(contentUrl);
      });
    })
    .catch(error => {
      console.error('Si è verificato un errore:', error);
    });
}

function downloadPdf(url) {
  var link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', '');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
