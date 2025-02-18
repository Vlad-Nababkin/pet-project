const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
const UserController = require('../controllers/UserController');
const verifyRefreshToken = require("../middleware/verifyRefreshToken");

// Здесь вы можете добавить ваши маршруты для UserController
// Например:
router.get('/refreshTokens', verifyRefreshToken, AuthController.refreshTokens)
router.post('/signUp', UserController.signUp)
router.post('/signIn', UserController.signIn)
router.get('/signOut', UserController.signOut)

module.exports = router;
