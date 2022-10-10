const fetch = require('node-fetch');

const fetchInspiration = () => {
  const url = 'https://api.goprogram.ai/inspiration';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(`"${data.quote}" | ${data.author}`));
}

fetchInspiration();