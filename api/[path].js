// api/[path].js
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'http://macs-mf-svr2.info:9560/Asian_Global_V3/',
  changeOrigin: true,
  pathRewrite: {
    '^/': '/', // keep path intact
  }
});

module.exports = (req, res) => {
  return proxy(req, res, (err) => {
    if (err) {
      res.statusCode = 500;
      res.end('Proxy error: ' + err.message);
    }
  });
};
