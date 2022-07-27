const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/projects', projectRoutes);

module.exports = router;