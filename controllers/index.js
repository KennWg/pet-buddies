const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const profileRoutes = require('./profile-routes');
const userRoutes = require('./users-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/profile',profileRoutes);
router.use('/user', userRoutes);

module.exports = router;
