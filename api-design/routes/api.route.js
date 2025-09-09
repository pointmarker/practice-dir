const express = require('express')
const { apiGetController, apiGetUserController, getAllUsers } = require('../controllers/api.controller')
const router = express.Router()

router.route('/').get(apiGetController)
router.route('/users').get(getAllUsers)
router.route('/users/:id').get(apiGetUserController)

module.exports =router