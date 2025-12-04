const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({company_name: 'gong', company_domain: 'gong.io'})
};

fetch('https://api.leadmagic.io/v1/companies/company-funding', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
