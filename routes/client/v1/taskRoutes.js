/**
 * taskRoutes.js
 * @description :: CRUD API routes for task
 */

const express = require('express');
const router = express.Router();
const taskController = require('../../../controller/client/v1/taskController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
router.route('/client/api/v1/task/create').post(auth(PLATFORM.CLIENT),taskController.addTask);
router.route('/client/api/v1/task/list').post(auth(PLATFORM.CLIENT),taskController.findAllTask);
router.route('/client/api/v1/task/count').post(auth(PLATFORM.CLIENT),taskController.getTaskCount);
router.route('/client/api/v1/task/softDeleteMany').put(auth(PLATFORM.CLIENT),taskController.softDeleteManyTask);
router.route('/client/api/v1/task/addBulk').post(auth(PLATFORM.CLIENT),taskController.bulkInsertTask);
router.route('/client/api/v1/task/updateBulk').put(auth(PLATFORM.CLIENT),taskController.bulkUpdateTask);
router.route('/client/api/v1/task/deleteMany').post(auth(PLATFORM.CLIENT),taskController.deleteManyTask);
router.route('/client/api/v1/task/softDelete/:id').put(auth(PLATFORM.CLIENT),taskController.softDeleteTask);
router.route('/client/api/v1/task/partial-update/:id').put(auth(PLATFORM.CLIENT),taskController.partialUpdateTask);
router.route('/client/api/v1/task/update/:id').put(auth(PLATFORM.CLIENT),taskController.updateTask);    
router.route('/client/api/v1/task/:id').get(auth(PLATFORM.CLIENT),taskController.getTask);
router.route('/client/api/v1/task/delete/:id').delete(auth(PLATFORM.CLIENT),taskController.deleteTask);

module.exports = router;
