const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({profile_url: 'https://www.linkedin.com/in/williamhgates'})
};

fetch('https://api.leadmagic.io/v1/people/personal-email-finder', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
