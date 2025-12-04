const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({
    profile_url: 'jesseoue',
    work_email: 'jesse@leadmagic.io',
    personal_email: 'jesseouel@gmail.com'
  })
};

fetch('https://api.leadmagic.io/v1/people/mobile-finder', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
