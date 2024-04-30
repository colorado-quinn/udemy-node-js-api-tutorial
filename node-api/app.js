const express = require('express');
const { useMiddleware, useRouting } = require('./middleware');

const port = 8080;
const app = express();

useMiddleware(app);
useRouting(app);

app.listen(port, () => console.log(`listening on port ${port}`));
