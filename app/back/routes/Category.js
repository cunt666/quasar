
import Router from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = new Router();
      router.post('/category', CategoryController.create);
      router.get('/category', CategoryController.getAll);
      router.get('/category/:id', CategoryController.getSingle);
      router.put('/category/', CategoryController.update);
      router.delete('/category/:id', CategoryController.delete);

export default router;

