const Redis = require('ioredis').default;

const redis = new Redis(process.env.REDIS_URL,{family:0});

module.exports = redis; 