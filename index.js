// var http = require('http')
// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);
// console.log('server started');
let CryptoJS = require('crypto-js');
let request = require('request');

let user = {
    usrname: '17688883082',
    pwd: '17688883082'
};
let loginUrl = 'https://i.meiyijia.com.cn/login.html';
let headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15'
};
let datas = {
    action: 'getSessionId',

};
let opts = {
    url: loginUrl,
    method: 'POST',
    headers: headers,
    form: datas
};
request(opts, (e, r, b) => {
    console.log(e)
    console.log(r)
    console.log(b)
    console.log(r.headers['set-cookie'])
    
}
);