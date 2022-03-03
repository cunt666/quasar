
import Router from 'express';
import RoleController from '../controllers/RoleController.js';

const router = new Router();
      router.post('/role', RoleController.create);
      router.get('/role', RoleController.getAll);
      router.get('/role/:id', RoleController.getSingle);
      router.put('/role/', RoleController.update);
      router.delete('/role/:id', RoleController.delete);

export default router;

