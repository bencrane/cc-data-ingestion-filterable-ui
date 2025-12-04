const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({
    profile_url: 'https://www.linkedin.com/in/jesseoue/',
    company_name: 'Smartlead',
    company_domain: 'smartlead.ai'
  })
};

fetch('https://api.leadmagic.io/v1/people/job-change-detector', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
