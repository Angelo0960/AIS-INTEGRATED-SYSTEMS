import express from 'express';
import 'dotenv/config';
import authRoutes from '../adapter_layer/routes/authRoutes.js';

//initialize express app
const app = express();

//Enable CORS to frontend
let corsOptions = {
  origin: process.env.ORIGIN

}

//middleware
app.use(express.json());


try
{
app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening to port ${process.env.PORT || 3001}...`);
});
}catch(e){
    console.error('Error starting the server:', e);
}

 
app.use  ('/user',authRoutes)

//req cons
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});