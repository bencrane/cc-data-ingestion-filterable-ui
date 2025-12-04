const options = {method: 'GET', headers: {'X-API-Key': '<api-key>'}};

fetch('https://api.leadmagic.io/v1/jobs/regions', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
