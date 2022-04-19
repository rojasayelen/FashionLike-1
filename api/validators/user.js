const { check } = require('express-validator');
const  validateResults  = require('../utils/handleValidators');

const validatorRegisterUser = [
    check('name')
    .notEmpty()
    .withMessage('el nombre es un campo obligatorio'),
    check('surname')
    .notEmpty()
    .withMessage('debe ingresar un apellido'),
    check('email', 'email is required')
    .notEmpty()
    .isLength({min:3, max:30})
    .isEmail()//ok
    .normalizeEmail(), //ok
    check('password')
    .notEmpty(),
      (req, res, next) => {
        return validateResults(req, res, next)}
    ];

module.exports = {validatorRegisterUser};