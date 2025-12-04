const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({company_domain: 'gong.io', company_name: 'gong', limit: 20})
};

fetch('https://api.leadmagic.io/v1/people/employee-finder', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
