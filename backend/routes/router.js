const express = require('express')
const {addProduct, getProducts, deleteProducts, getOneProduct} = require("../controllers/productController");
const {getCategory} = require('../controllers/categoryController')
const {createUser, getUsers} = require("../controllers/userController");
const router = express.Router()

router.get('/', getProducts)
router.post('/', addProduct)
router.delete('/', deleteProducts)
router.post('/users',createUser)
router.get('/users',getUsers)
router.get('/categories/:category/:order', getCategory)
router.get('/:_id', getOneProduct)

module.exports = router