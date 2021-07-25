var AipOcr = require('./src/index').ocr;
var fs = require('fs');
var http = require('http');

//设置APPID/AK/SK（前往百度云控制台创建应用后获取相关数据）
var APP_ID = "24602192";
var API_KEY = "CyjP9TuwNUTFUGntKi6zDcfn";
var SECRET_KEY = "BAscOURDHDi6t2xVBmT3fPAIx2FX3ECm";

var client = new AipOcr(APP_ID, API_KEY, SECRET_KEY);
var image = fs.readFileSync('assets/2.jpg');
console.log("11111")
var app = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    var base64Img = new Buffer(image).toString('base64');
    client.generalBasic(base64Img).then((result)=> {
        console.log(result)
        res.end(JSON.stringify(result));
    });

});

app.listen(8000, function () {
    console.log('listening on 8000');
});