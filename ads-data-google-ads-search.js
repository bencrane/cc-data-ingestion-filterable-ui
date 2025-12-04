const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({company_domain: 'gong.io', company_name: 'gong'})
};

fetch('https://api.leadmagic.io/v1/ads/google-ads-search', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
