const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: JSON.stringify({
    company_name: 'Microsoft',
    company_website: 'https://www.microsoft.com',
    job_title: 'Developer',
    location: 'new york',
    experience_level: 'senior',
    job_description: 'python "software engineer"',
    country_id: 'US',
    region_id: 123,
    job_type_id: 1,
    company_type_id: 4,
    company_industry_id: 123,
    min_employees: 123,
    max_employees: 123,
    has_remote: false,
    posted_within: 30,
    posted_after: '2023-12-25',
    posted_before: '2023-12-25',
    page: 1,
    per_page: 20
  })
};

fetch('https://api.leadmagic.io/v1/jobs/jobs-finder', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
