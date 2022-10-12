const router = require('express').Router()
const productsServices = require('../services/products.services')

router.get('/', productsServices.getAllProducts)
router.post('/', productsServices.postProduct)

router.get('/:id', productsServices.getProductsById)

router.patch('/:id', productsServices.patchProduct)

router.delete('/:id', productsServices.deleteProduct)


module.exports = router
