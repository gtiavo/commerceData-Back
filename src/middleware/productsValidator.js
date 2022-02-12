const { body } = require('express-validator');


const validations = [
    body('nombre').notEmpty().withMessage('Debes de ingresar un nombre al producto').isLength({min:4}).withMessage('El nombre debe de contener al menos 4 caracteres'),
    body('precio').notEmpty().withMessage('Debes de ingresar un precio al producto').isLength({min:1}).withMessage('El precio debe de contener al menos 1 numero'),
    body('cantidad').notEmpty().withMessage('Debes de ingresar una cantidad al producto').isLength({min:1}).withMessage('La cantidad debe de contener al menos 1 numero'),
    body('categoriaId').notEmpty().withMessage('Debes de ingresar una categoriaId al producto').isLength({min:1}).withMessage('La categoriaId debe de contener al menos 1 caracter'),
    body('subcategoria').notEmpty().withMessage('Debes de ingresar una subcategoria al producto').isLength({min:1}).withMessage('La subcategoria debe de contener al menos 1 caracter'),

];


module.exports = validations