const next = require('next'),
      { createServer } = require('http'),
      _ = require('underscore');

const routes = require('./routes');

const app = next({
  dev: !_.isEqual(process.env.NODE_ENV, 'production')
});

const handler = routes.getRequestHandler(app);

// Without express
app.prepare().then(() => {
  createServer(handler).listen(3000)
})
