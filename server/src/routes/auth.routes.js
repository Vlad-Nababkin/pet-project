const router = require('express').Router()
const AuthController = require('../controllers/AuthController.js')
const verifyRefreshToken = require('../middleware/verifyRefreshToken.js')

router.get('/refreshTokens', verifyRefreshToken, AuthController.refreshTokens)
router.post('/signUp', AuthController.signUp)
router.get('/signOut', AuthController.signOut)

module.exports = router
