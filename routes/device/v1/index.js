/**
 * index route file of device platform.
 * @description: exports all routes of device platform.
 */
const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./userRoutes'));
router.use(require('./categoryRoutes'));
router.use(require('./taskRoutes'));
router.use(require('./tagRoutes'));
router.use(require('./task_tagRoutes'));

module.exports = router;
