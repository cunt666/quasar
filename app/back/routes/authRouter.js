
import Router from 'express';
import controller from '../controllers/authController.js';
import {check} from 'express-validator';
import authMiddlewear from '../middleweare/authMiddlewear.js';

const router = new Router();

router.post('/registration',[
  check('username','Username is empty').notEmpty(),
  check('password', 'More then 4 and lower then 15').isLength({min:4,max:15})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)
router.delete('/delete/:id', controller.deleteUser)
router.put('/update', controller.update)
router.post('/check-users', controller.checkUsers)

export default router;
