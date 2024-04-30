const morgan = require('morgan');
const postRoutesRouter = require('./routes/post');

exports.useMiddleware = (app) => {
    const demoMiddleware = (req, res, next) => {
        console.log('middleware applied!');
        next();
    };
    app.use(demoMiddleware);
    app.use(morgan('dev'));
};

exports.useRouting = (app) => {
    app.use('/', postRoutesRouter);
};
