const Router = require('express').Router;
const { body } = require('express-validator');
const userController = require('../controllers/user-controller');
const adminController = require('../controllers/admin-controller');

const router = new Router();

router.post(
    '/user-registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration
);
router.post('/user-login', userController.login);
router.post('/user-logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/user-refresh', userController.refresh);

router.post(
    '/admin-registration',
    body('name').isAlphanumeric(),
    body('password').isLength({ min: 3, max: 32 }),
    adminController.registration
);
router.post('/admin-login', adminController.login);
router.post('/admin-logout', adminController.logout);
router.get('/admin-refresh', adminController.refresh);

module.exports = router;
