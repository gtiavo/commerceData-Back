const express = require('express');
const router = express.Router();
const validations = require('../middleware/productsValidator')
const { navigationController } = require('../controller');





router.get('/',navigationController.getProducts);

router.get('/:id',navigationController.oneProduct);

router.post('/', validations ,navigationController.newProduct);

router.put('/:id' , navigationController.updateProduct);

router.delete('/:id',navigationController.deleteProduct);




module.exports = router;