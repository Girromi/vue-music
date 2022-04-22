// const proxy = require('http-proxy-middleware');

// module.exports = {
//    devServer: {
//       open: true,
//       host: 'localhost',
//       port: 8080,
//       https: false,
//       proxy: {
//          '/api': {
//             target: 'http://localhost:3000',
//             changeOrigin: true,
//             pathRewrite: {
//                '^/api': ''
//             }
//          }
//       }
//    }
// }
export default {
   baseUrl: {
      dev: '/api/',
      pro: ''
   }
}