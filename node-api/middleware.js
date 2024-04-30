const morgan = require('morgan');

exports.useMiddleware = (app) => {
    const demoMiddleware = (req, res, next) => {
        console.log('middleware applied!');
        next();
    };
    app.use(demoMiddleware);
    app.use(morgan('dev'));
};
