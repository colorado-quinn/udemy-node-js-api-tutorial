const { useApp } = require('./useApp');
const dotenv = require('dotenv');

dotenv.config();

exports.usePort = () => {
    const port = process.env.PORT || 8080;
    const app = useApp();

    app.listen(port, () => console.log(`listening on port ${port}`));
};
