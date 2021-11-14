const { Router } = require('express')
const router = Router()
const CiudadCtrl = require('../controller/Ciudades.controller')

router.post('/crear', CiudadCtrl.crearCiudad)
router.post('/login', CiudadCtrl.login)
module.exports = router