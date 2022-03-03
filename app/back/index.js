
import settings from './settings.js'
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router.js';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import authMiddlewear from './middleweare/authMiddlewear.js';


const app = express();
      app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
      app.use(express.json());
      app.use('/api',authMiddlewear, router);
      app.use('/auth', authRouter);

async function startApp(){
  try {
    await mongoose.connect( settings.database.POINT, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    app.listen( settings.api.PORT, settings.api.HOST , ()=> console.log('server started on '+settings.api.PORT) );
  } catch(e){
    console.log(e)
  }
}
startApp();
