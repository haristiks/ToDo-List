const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/login", controller.login);
router.post("/permission", controller.checkPermission);

module.exports = router;
