/*
  Path: /api/login
*/
const { Router } = require('express');
const { login } = require('../controllers/authController')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();
router.post('/', [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        validarCampos
    ],
    login
);

module.exports = router;