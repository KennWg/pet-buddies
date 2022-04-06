const router = require('express').Router();

const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const commentRoutes = require('./comment-routes');
const petRoutes = require('./pet-routes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/comments', commentRoutes);
router.use('/pets', petRoutes);

module.exports = router;
