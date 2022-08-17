/**
 * task_tagRoutes.js
 * @description :: CRUD API routes for task_tag
 */

const express = require('express');
const router = express.Router();
const task_tagController = require('../../controller/admin/task_tagController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
router.route('/admin/task_tag/create').post(task_tagController.addTask_tag);
router.route('/admin/task_tag/list').post(task_tagController.findAllTask_tag);
router.route('/admin/task_tag/count').post(task_tagController.getTask_tagCount);
router.route('/admin/task_tag/softDeleteMany').put(task_tagController.softDeleteManyTask_tag);
router.route('/admin/task_tag/addBulk').post(task_tagController.bulkInsertTask_tag);
router.route('/admin/task_tag/updateBulk').put(task_tagController.bulkUpdateTask_tag);
router.route('/admin/task_tag/deleteMany').post(task_tagController.deleteManyTask_tag);
router.route('/admin/task_tag/softDelete/:id').put(task_tagController.softDeleteTask_tag);
router.route('/admin/task_tag/partial-update/:id').put(task_tagController.partialUpdateTask_tag);
router.route('/admin/task_tag/update/:id').put(task_tagController.updateTask_tag);    
router.route('/admin/task_tag/:id').get(task_tagController.getTask_tag);
router.route('/admin/task_tag/delete/:id').delete(task_tagController.deleteTask_tag);

module.exports = router;
