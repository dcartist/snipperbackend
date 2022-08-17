/**
 * index route file of client platform.
 * @description: exports all routes of client platform.
 */
const express =  require('express');
const router =  express.Router();
router.use('/client/auth',require('./auth'));
router.use(require('./userRoutes'));
router.use(require('./categoryRoutes'));
router.use(require('./taskRoutes'));
router.use(require('./tagRoutes'));
router.use(require('./task_tagRoutes'));

module.exports = router;
