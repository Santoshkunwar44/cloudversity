const { registerUser, setUserdata, otpConfirmation } = require("../controllers/AuthController");

const router = require("express").Router()


router.post("/register",registerUser)

router.post("/setupUser",setUserdata)

router.post("/otpCofirmation",otpConfirmation)

module.exports = router;