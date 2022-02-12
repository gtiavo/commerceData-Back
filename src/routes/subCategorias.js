const { Router } = require('express');
const router = Router();
const { subCategoriasControllers } = require('../controller')



router.get('/', subCategoriasControllers.getSubCategorias );

router.post('/', subCategoriasControllers.newSubCategory);

router.put('/:id', subCategoriasControllers.editSubCategory);

router.delete('/:id', subCategoriasControllers.deleteSubCategory);






module.exports = router;