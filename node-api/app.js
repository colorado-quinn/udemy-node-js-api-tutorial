const express = require('express');
const { getPosts } = require('./routes/post');

const port = 8080;

const app = express();
app.get('/', getPosts);
app.listen(port, () => console.log(`listening on port ${port}`));
