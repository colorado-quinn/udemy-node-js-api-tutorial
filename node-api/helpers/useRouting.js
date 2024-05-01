const { useApp } = require('./useApp');
const express = require('express');
const postController = require('../controllers/post');

exports.useRouting = () => {
    const router = express.Router();
    router.get('/', postController.getPosts);
    router.post('/post', postController.createPost);

    const app = useApp();
    app.use('/', router);
};
