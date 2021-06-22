const express = require('express')
const router = express.Router()
const Controller = require('../controllers/index.js')

router.get('/', Controller.getComments) 
router.post('/', Controller.postComment)

router.delete('/:id', Controller.deleteComment)


module.exports = router