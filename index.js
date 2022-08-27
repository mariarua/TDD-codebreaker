const api = require('./api/index.js');

api.listen({
  port: process.env.PORT || 3000
});