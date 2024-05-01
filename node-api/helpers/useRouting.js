const { getPosts, createPost } = require('../controllers/post');
const { useApp } = require('./useApp');
const express = require('express');
const useValidation = require('./useValidation');

exports.useRouting = () => {
    const { postValidation } = useValidation();
    const router = express.Router();
    router.get('/', getPosts);
    router.post('/post', postValidation(), createPost);

    const app = useApp();
    app.use('/', router);
};
