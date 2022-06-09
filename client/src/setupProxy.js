/*
    proxy 설정 
    두 개의 다른 포트를 가지고 있는 서버는 request를 보낼 수 없는 
    CORS 이슈를 가지므로 프록시 서버를 사용해 이를 해결

    (서버 : 5000번 포트, 클라이언트 : 3000번 포트)
*/
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            chagneOrigin: true,
        })
    );
};