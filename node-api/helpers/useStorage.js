const mongoose = require('mongoose');

exports.useStorage = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => console.log('DB connected'));
    mongoose.connection.on('error', (err) => console.log(`DB connection error: ${err.message}`));
};
