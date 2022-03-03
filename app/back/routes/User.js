
import Router from 'express';
import UserController from '../controllers/UserController.js';

const router = new Router();
      router.post('/user', UserController.create);
      router.get('/user', UserController.getAll);
      router.get('/user/:id', UserController.getSingle);
      router.put('/user/', UserController.update);
      router.delete('/user/:id', UserController.delete);

export default router;

