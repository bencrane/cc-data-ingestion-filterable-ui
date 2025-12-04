const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({
    profile_url: 'https://www.linkedin.com/company/leadmagichq',
    company_domain: 'leadmagic.io',
    company_name: 'Leadmagic'
  })
};

fetch('https://api.leadmagic.io/v1/companies/company-search', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
