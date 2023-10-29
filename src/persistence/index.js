if (process.env.POSTGRES_HOST || process.env.POSTGRES_HOST_FILE) module.exports = require('./postgres');
else module.exports = require('./sqlite');
