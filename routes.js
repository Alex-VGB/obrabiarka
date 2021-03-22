const routes = require('express').Router()
const auth = require('./middleware/auth')

// For Upload
const multer = require('multer')
const uploadConfig = require('./config/upload')
const upload = multer(uploadConfig)

// CONTROLLER USER
const UserController = require('./controllers/UserController')
routes.post('/profile/new', UserController.store)

// CONTROLLER PROFILE
const ProfileController = require('./controllers/ProfileController')
routes.get('/profile/', auth,  ProfileController.indexByProfileId)
routes.post('/profile/update', auth, upload.single('avatar'), ProfileController.indexByProfileUpdate)


// CONTROLLER PRODUCT
const ProductController = require('./controllers/ProductController')
routes.post('/product/new', auth, upload.single('img'), ProductController.store)
routes.delete('/product/:_id', auth, ProductController.destroy)
routes.put('/product/:_id', auth, upload.single('img'), ProductController.update)

// CONTROLLER PAGINATION
const PaginationController = require('./controllers/PaginationController')
routes.get('/products', PaginationController.index)
routes.get('/products/category', PaginationController.indexByCategory)
routes.get('/products/user', auth, PaginationController.indexByUserId)

// CONTROLER DETAILS
const DetailsController = require('./controllers/DetailsController')
routes.get('/product/:_id', DetailsController.indexByProduct)

// CONTROLER AUTH
const AuthController = require('./controllers/AuthController')
routes.post('/authentication', AuthController.login)
routes.get('/validate-token', AuthController.validateToken)


module.exports = routes