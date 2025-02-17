const router = require("express").Router();
const UserController = require('../controllers/UserController')

// Здесь вы можете добавить ваши маршруты для UserController
// Например:

router.post('/signUp', UserController.signUp)
router.post('/signIn', UserController.signIn)
router.get('/signOut', UserController.signOut)

module.exports = router;
