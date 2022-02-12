var express = require('express');
var router = express.Router();


router.use('/productos',require('./productos'));

router.use('/categorias',require('./categorias'));

router.use('/subcategorias', require('./subCategorias'));


module.exports = router;