const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Replace with your API base path if necessary
    createProxyMiddleware({
      target: 'http://183.83.216.29:7777', // Replace with your actual API base URL
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove `/api` prefix if not needed by your API
      },
    })
  );
};
