const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({
    first_name: 'Bill',
    last_name: 'Gates',
    domain: 'microsoft.com',
    company_name: 'Microsoft'
  })
};

fetch('https://api.leadmagic.io/v1/people/email-finder', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
