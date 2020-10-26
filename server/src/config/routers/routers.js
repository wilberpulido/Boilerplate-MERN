const index = require('../../controllers/index');

const express = require("express");
const router = express.Router();

router.use('/',index);


module.exports = router;