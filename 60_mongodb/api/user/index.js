const { Router } = require("express");
const router = Router();
const ctrl = require("./user.ctrl");

router.get("/signup", ctrl.showSignupPage);

module.exports = router;
