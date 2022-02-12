const { Router } = require('express');
const router = Router();
const { categoriasControllers } = require('../controller');


router.get('/', categoriasControllers.getCategory);

router.get('/:id', categoriasControllers.oneCategory);


router.post('/', categoriasControllers.newCategory);

router.put('/:id', categoriasControllers.editCategory);

router.delete('/:id', categoriasControllers.deleteCategory);





module.exports = router