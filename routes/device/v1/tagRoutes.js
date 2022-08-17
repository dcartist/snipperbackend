/**
 * tagRoutes.js
 * @description :: CRUD API routes for tag
 */

const express = require('express');
const router = express.Router();
const tagController = require('../../../controller/device/v1/tagController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/device/api/v1/tag/create').post(auth(PLATFORM.DEVICE),tagController.addTag);
router.route('/device/api/v1/tag/list').post(auth(PLATFORM.DEVICE),tagController.findAllTag);
router.route('/device/api/v1/tag/count').post(auth(PLATFORM.DEVICE),tagController.getTagCount);
router.route('/device/api/v1/tag/softDeleteMany').put(auth(PLATFORM.DEVICE),tagController.softDeleteManyTag);
router.route('/device/api/v1/tag/addBulk').post(auth(PLATFORM.DEVICE),tagController.bulkInsertTag);
router.route('/device/api/v1/tag/updateBulk').put(auth(PLATFORM.DEVICE),tagController.bulkUpdateTag);
router.route('/device/api/v1/tag/deleteMany').post(auth(PLATFORM.DEVICE),tagController.deleteManyTag);
router.route('/device/api/v1/tag/softDelete/:id').put(auth(PLATFORM.DEVICE),tagController.softDeleteTag);
router.route('/device/api/v1/tag/partial-update/:id').put(auth(PLATFORM.DEVICE),tagController.partialUpdateTag);
router.route('/device/api/v1/tag/update/:id').put(auth(PLATFORM.DEVICE),tagController.updateTag);    
router.route('/device/api/v1/tag/:id').get(auth(PLATFORM.DEVICE),tagController.getTag);
router.route('/device/api/v1/tag/delete/:id').delete(auth(PLATFORM.DEVICE),tagController.deleteTag);

module.exports = router;
