const { getSessionuser } = require("../controllers/UserController");

const router = require("express").Router()


router.get("/session-user",getSessionuser)

module.exports = router;