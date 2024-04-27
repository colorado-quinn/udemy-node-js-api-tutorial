//const { createServer } = require('http'); // core module
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello from express :)');
});
app.listen(3000);

// const server = createServer((req, res) => {
//     res.end('hello world from node js server :D');
// });
// server.listen(3000);
