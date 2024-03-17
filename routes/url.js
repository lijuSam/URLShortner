const express = require('express');
const {handleGenerateShortUrl} = require("../controllers/url")

const router = express.Router();

router.post("/url",handleGenerateShortUrl);

module.exports = router;