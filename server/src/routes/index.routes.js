const router = require("express").Router();
const userRoutes = require("./auth.routes");
const qwestRoutes = require('./qwest.routes')
const formatResponse = require("../utils/formatResponse");

router.use('/auth', userRoutes)
router.use('/qwest', qwestRoutes)

router.use("*", (req, res) => {
  res.status(404).json(formatResponse(404, "Not found", null, "Resource not found"));
});

module.exports = router;
