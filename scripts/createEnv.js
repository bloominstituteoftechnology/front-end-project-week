const fs = require('fs');

fs.writeFileSync('./.env', `SERVER=${process.env.SERVER}\n`);
