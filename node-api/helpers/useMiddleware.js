const { useApp } = require('./useApp');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const demoMiddleware = (req, res, next) => {
    //console.log('middleware applied!');
    next();
};

exports.useMiddleware = () => {
    const app = useApp();

    app.use(demoMiddleware);
    app.use(morgan('dev'));
    app.use(bodyParser.json());
};
