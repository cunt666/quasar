
import Router from 'express';
 import User from './User.js';  import Role from './Role.js';  import Category from './Category.js';  import Posts from './Posts.js'; 
const router = new Router();

       router.use(User);  router.use(Role);  router.use(Category);  router.use(Posts); 
export default router;
