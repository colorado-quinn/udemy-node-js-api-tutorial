const { useApp } = require('./useApp');
const morgan = require('morgan');

exports.useMiddleware = () => {
    const app = useApp();
    const demoMiddleware = (req, res, next) => {
        console.log('middleware applied!');
        next();
    };
    app.use(demoMiddleware);
    app.use(morgan('dev'));
};
