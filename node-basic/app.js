// to execute in terminal:  node app.js
const { sum } = require('./helpers');
const http = require('http');

//console.log('hello from node js');
//console.log('process: ', process);

const server = http.createServer((req, res) => {
    res.end('hello world from node js :D');
});

server.listen(3000);

const total = sum(10, 200);
console.log('total: ', total);
