const express = require('express');
const router = new express.Router();
const {defaultPage, userPage} = require('./service')


router.get("/", defaultPage);
router.get("/user", userPage);

module.exports = router;