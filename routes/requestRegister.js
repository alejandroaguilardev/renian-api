const { Router } = require("express");
const { sendEmail } = require("../controllers/requestRegister");

const router = Router();


router.post("/",[], sendEmail); 

module.exports = router;