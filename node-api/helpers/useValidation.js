const { body, validationResult } = require('express-validator');

const postValidation = () => {
    return async (req, res, next) => {
        //console.log('post validation!');

        // title
        await body('title').trim().notEmpty().withMessage('A title is required.').run(req);
        await body('title')
            .trim()
            .isLength({ min: 4, max: 150 })
            .withMessage('The title must be between 4 and 150 characters.')
            .run(req);

        // body
        await body('body').trim().notEmpty().withMessage('A body is required.').run(req);
        await body('body')
            .trim()
            .isLength({ min: 4, max: 2000 })
            .withMessage('The body must be between 4 and 2000 characters.')
            .run(req);

        const errors = validationResult(req);
        //console.log('val result: ', errors.array());
        if (errors.isEmpty()) {
            return next();
        }

        const firstError = errors.array().map((err) => err.msg)[0];
        return res.status(400).json({ error: firstError });
    };
};

const useValidation = () => ({ postValidation });

module.exports = useValidation;
