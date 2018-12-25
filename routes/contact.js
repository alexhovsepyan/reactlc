const express = require("express");
const { contactC } = require('../controllers/contactC')
const rateLimit = require('express-rate-limit')


const router = express.Router();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 20,
    message: 'Too many messages send form this IP address, please try again in an hour.'
})


router.post("/", limiter, contactC);

module.exports = router;
