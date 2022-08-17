/**
 * index.js
 * @description :: index route of platforms
 */

const express = require('express');
const router =  express.Router();

router.use(require('./device/v1/index'));
router.use(require('./client/v1/index'));
router.use(require('./admin/index'));

module.exports = router;