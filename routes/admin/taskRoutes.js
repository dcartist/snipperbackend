/**
 * taskRoutes.js
 * @description :: CRUD API routes for task
 */

const express = require('express');
const router = express.Router();
const taskController = require('../../controller/admin/taskController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
router.route('/admin/task/create').post(taskController.addTask);
router.route('/admin/task/list').post(taskController.findAllTask);
router.route('/admin/task/count').post(taskController.getTaskCount);
router.route('/admin/task/softDeleteMany').put(taskController.softDeleteManyTask);
router.route('/admin/task/addBulk').post(taskController.bulkInsertTask);
router.route('/admin/task/updateBulk').put(taskController.bulkUpdateTask);
router.route('/admin/task/deleteMany').post(taskController.deleteManyTask);
router.route('/admin/task/softDelete/:id').put(taskController.softDeleteTask);
router.route('/admin/task/partial-update/:id').put(taskController.partialUpdateTask);
router.route('/admin/task/update/:id').put(taskController.updateTask);    
router.route('/admin/task/:id').get(taskController.getTask);
router.route('/admin/task/delete/:id').delete(taskController.deleteTask);

module.exports = router;
