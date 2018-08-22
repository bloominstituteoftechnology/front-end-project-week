const fs = require('fs');

fs.writeFileSync('./build/.env', `SERVER=${process.env.SERVER}\n`);
