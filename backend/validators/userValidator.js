const { body } = require('express-validator');

const userValidationRules = () => {
    return [
        body('username')
            .isLength({ min: 3, max: 20 })
            .withMessage('Username must be between 3 and 20 characters'),
        body('email')
            .isEmail()
            .withMessage('Email must be valid')
            .isLength({ max: 50 })
            .withMessage('Email must be less than 50 characters'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long'),
        body('address')
            .optional()
            .isLength({ max: 100 })
            .withMessage('Address must be less than 100 characters'),
        body('phone.DDD')
            .optional()
            .isLength({ max: 3 })
            .withMessage('Phone DDD must be less than 3 characters'),
        body('phone.number')
            .optional()
            .isLength({ max: 9 })
            .withMessage('Phone number must be less than 9 characters'),
    ];
};

module.exports = {
    userValidationRules,
};