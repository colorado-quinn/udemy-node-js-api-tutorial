const { useApp } = require('./useApp');
const express = require('express');
const postController = require('../controllers/post');
const useValidation = require('./useValidation');

exports.useRouting = () => {
    const { postValidation } = useValidation();
    const router = express.Router();
    router.get('/', postController.getPosts);
    router.post('/post', postValidation(), postController.createPost);

    const app = useApp();
    app.use('/', router);
};
