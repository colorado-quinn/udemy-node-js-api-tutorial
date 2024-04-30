const express = require('express');
const { getPosts } = require('./routes/post');
const { useMiddleware } = require('./middleware');

const port = 8080;
const app = express();

// middleware
useMiddleware(app);

app.get('/', getPosts);
app.listen(port, () => console.log(`listening on port ${port}`));
