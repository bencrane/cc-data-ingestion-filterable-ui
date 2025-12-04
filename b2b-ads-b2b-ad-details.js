const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({ad_url: 'https://www.linkedin.com/ad-library/detail/633872143'})
};

fetch('https://api.leadmagic.io/v1/ads/b2b-ads-details', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
