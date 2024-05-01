const { useApp } = require('./useApp');
const postRoutesRouter = require('../routes/post');

exports.useRouting = () => {
    const app = useApp();
    app.use('/', postRoutesRouter);
};
