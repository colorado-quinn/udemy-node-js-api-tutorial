const Post = require('../models/post');

exports.getPosts = (req, res) => {
    res.json({
        posts: [{ title: 'First post!' }, { title: 'Second post' }],
    });
};

exports.createPost = async (req, res) => {
    console.log('Creating post: ', req.body);

    try {
        const post = new Post(req.body);
        const result = await post.save();

        return res.status(200).json({ post: result });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
};
