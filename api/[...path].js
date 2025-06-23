const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'macs-mf-svr2.info:9560/Asian_Global_V3/',
  changeOrigin: true,
  pathRewrite: {
    '^/': '/', // strip nothing — pass everything after /
  },
});

module.exports = (req, res) => {
  proxy(req, res, (err) => {
    res.statusCode = 500;
    res.end('Proxy error: ' + err.message);
  });
};
