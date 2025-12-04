const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({
    company_domain: 'gong.io',
    profile_url: 'https://www.linkedin.com/company/gong-io',
    company_name: 'Gong'
  })
};

fetch('https://api.leadmagic.io/v1/companies/competitors-search', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
