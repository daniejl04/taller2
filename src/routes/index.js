const express = require('express');
const controllers = require('../controllers/useControllers.js')
const router = express.Router()


try {
    router.get('/libros', controllers.getlibros)
    router.post('/newLibro', controllers.createlibros)
} catch (error) {
    
}


module.exports = router