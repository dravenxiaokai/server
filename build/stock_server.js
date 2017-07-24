"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
app.get('/', function (req, res) { return res.send('这里是首页!!!'); });
app.get('/api/stock', function (req, res) {
    res.json(stocks);
});
app.get('/api/stock/:id', function (req, res) {
    res.json(stocks.find(function (stock) { return stock.id == req.params.id; }));
});
//http-server
var server = app.listen(8080, 'localhost', function () {
    console.log('服务器已启动，地址是http://localhost:8080/');
});
//ws-server
var wsServer = new ws_1.Server({ port: 8081 });
wsServer.on('connection', function (websocket) {
    websocket.send('欢迎连接服务器.');
    websocket.on('message', function (message) {
        console.log('接收到客户端发来的消息，消息内容是： ' + message);
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send('这是定时推送的消息');
        });
    }
}, 2000);
var Stock = (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, '第一只股票', 1.99, 3.5, '这是我的第一只股票', ['IT', '互联网']),
    new Stock(2, '第二只股票', 2.99, 3.5, '这是我的第二只股票', ['金融']),
    new Stock(3, '第三只股票', 3.99, 3.5, '这是我的第三只股票', ['IT']),
    new Stock(4, '第四只股票', 4.99, 3.5, '这是我的第四只股票', ['IT', '互联网']),
    new Stock(5, '第五只股票', 5.99, 3.5, '这是我的第五只股票', ['互联网']),
    new Stock(6, '第六只股票', 6.99, 3.5, '这是我的第六只股票', ['金融']),
    new Stock(7, '第七只股票', 7.99, 3.5, '这是我的第七只股票', ['IT', '互联网'])
];
