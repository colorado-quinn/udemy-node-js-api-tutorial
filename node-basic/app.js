// to execute in terminal:  node app.js
const { sum } = require('./helpers');
//const { createServer } = require('http'); // core module
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello from express :)');
});
app.listen(3000);

//console.log('process: ', process);

// const server = createServer((req, res) => {
//     res.end('hello world from node js server :D');
// });
// server.listen(3000);

// const total = sum(10, 200);
// console.log('total: ', total);
