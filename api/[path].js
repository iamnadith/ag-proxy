// api/[path].js

const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'http://macs-mf-svr2.info:9560/Asian_Global_V3/',
  changeOrigin: true,
  pathRewrite: (path) => {
    // Strip /api from beginning
    const proxiedPath = path.replace(/^\/api/, '');
    return proxiedPath;
  }
});

module.exports = (req, res) => {
  proxy(req, res, (err) => {
    if (err) {
      res.status(500).end('Proxy Error: ' + err.message);
    }
  });
};
