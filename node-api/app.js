const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { useMiddleware, useRouting } = require('./middleware');

dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI).then(() => console.log('DB connected'));
mongoose.connection.on('error', (err) => console.log(`DB connection error: ${err.message}`));

const port = process.env.PORT || 8080;
const app = express();

useMiddleware(app);
useRouting(app);

app.listen(port, () => console.log(`listening on port ${port}`));
