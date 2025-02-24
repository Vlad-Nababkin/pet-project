const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
const QwestController = require("../controllers/QwestController");
const UserController = require('../controllers/UserController');
const verifyAccessToken = require("../middleware/verifyAccessToken");
const verifyRefreshToken = require("../middleware/verifyRefreshToken");


// Здесь вы можете добавить ваши маршруты для UserController
// Например:

router.get('/', verifyAccessToken, QwestController.getAll)

module.exports = router;
