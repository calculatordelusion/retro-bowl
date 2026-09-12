import https from 'https';

const host = 'retrobowlunblocked.live';
const key = '8f3b6c2d1e4a5b7c9f0a2d4e6b8c1a3e';
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/`,
  `https://${host}/retro-bowl-college`,
  `https://${host}/retro-bowl-25`,
  `https://${host}/retro-bowl-github`,
  `https://${host}/retro-goal`,
  `https://${host}/retro-ping-pong`,
  `https://${host}/best-teams`,
  `https://${host}/unblocked-at-school`,
  `https://${host}/cheats-and-secrets`,
  `https://${host}/playbook`,
  `https://${host}/controls`,
  `https://${host}/team-management`,
  `https://${host}/tips-and-tricks`,
  `https://${host}/game-instructions`,
  `https://${host}/faq`,
  `https://${host}/achievements`,
  `https://${host}/about`
];

const payload = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urlList
});

const agent = new https.Agent({ rejectUnauthorized: false });

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  agent: agent,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

console.log(`Submitting ${urlList.length} URLs to IndexNow for Bing & search engines...`);

const req = https.request(options, (res) => {
  console.log(`IndexNow API Response: ${res.statusCode} ${res.statusMessage}`);
  let responseBody = '';
  res.on('data', (chunk) => { responseBody += chunk; });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ Successfully submitted URLs to Bing IndexNow for instant crawling!');
    } else {
      console.log(`Response: ${responseBody}`);
    }
  });
});

req.on('error', (e) => {
  console.error(`IndexNow submission error: ${e.message}`);
});

req.write(payload);
req.end();
