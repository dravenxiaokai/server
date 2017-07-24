"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.end('hello node');
});
server.listen(8000);
console.log('server is running on 8000');
