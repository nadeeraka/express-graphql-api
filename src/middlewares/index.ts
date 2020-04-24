import express from 'express'
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import {routes} from '../routes'

// custome

const app = express();

//  app.use(req, res next) => {
//   const error = new Error(`Not found ${req.originalUrl}`);
//   res.status('404');
//   next(error);
// };
// // eslint-disable-next-line 
// export const errorHandler = (error:any, req:any, res:any, next:any) => {
//   const statusCode = res.statusCode === 200 ? 500: res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: error.message,
//     stack: process.env.NODE_ENV === 'production' ? '):' : error.stack,
//   });
// };
//  const morgan = app.use(Morgan('common'));
//  const helmet = app.use(Helmet());
//  const cors = app.use(Cors({
//  origin:'http://localhost:3000',
// }));


// eslint-disable-next-line 


 export const  bootMiddlewares = async ()=>
{

    await app.use(morgan("common"));
    await app.use(bodyParser.urlencoded({ extended: false }));
    await app.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
    await app.use(helmet());
    
    await app.use(routes.router);
    
}

  