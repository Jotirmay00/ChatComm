const express = require('express')
const { registerUser, authUser, allUsers } = require('../controlers/usercontrolers')
const { protect } = require('../middleware/authMiddleware')


const router = express.Router()

  
  router.route('/').post(registerUser).get(protect,allUsers)
 router.post('/login', authUser)

module.exports = router

