const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello wolrd from node js');
});

const port = 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
