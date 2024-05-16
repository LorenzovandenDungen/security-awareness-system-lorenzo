const express = require('express');
const router = express.Router();
const { createUser, bulkImportUsers, inviteUsers, updateUserRole } = require('../controllers/userController');
const { createTraining, updateTraining, deleteTraining, getTrainings } = require('../controllers/trainingController');

// User routes
router.post('/users', createUser);
router.post('/users/import', bulkImportUsers);
router.post('/users/invite', inviteUsers);
router.patch('/users/:id/role', updateUserRole);

// Training routes
router.post('/trainings', createTraining);
router.put('/trainings/:id', updateTraining);
router.delete('/trainings/:id', deleteTraining);
router.get('/trainings', getTrainings);

module.exports = router;
