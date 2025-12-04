const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({company_name: 'leadmagic', company_domain: 'leadmagic.io', job_title: 'ceo'})
};

fetch('https://api.leadmagic.io/v1/people/role-finder', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
