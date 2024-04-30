const express = require('express');
const postRoutesRouter = require('./routes/post');
const { useMiddleware } = require('./middleware');

const port = 8080;
const app = express();

// middleware
useMiddleware(app);
app.use('/', postRoutesRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
