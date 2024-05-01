const Post = require('../models/post');

exports.getPosts = (req, res) => {
    Post.find()
        //.select(['_id', 'title', 'body'])
        .select('-__v') // remove __v property
        .then((posts) => res.json({ posts }))
        .catch((error) => res.status(400).json({ error }));
};

exports.createPost = async (req, res) => {
    console.log('Creating post: ', req.body);

    const post = new Post(req.body);
    post.save()
        .then((result) => res.json({ post: result }))
        .catch((error) => res.status(400).json({ error }));
};
