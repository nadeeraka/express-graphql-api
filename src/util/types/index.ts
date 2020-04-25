import "reflect-metadata";
import {
  ExpressErrorMiddlewareInterface,
  HttpError,
  Middleware,
} from "routing-controllers";

import express from "express";
//import { ContainerInstance } from 'typedi';

export interface Context {
  request: express.Request;
  response: express.Response;
}

export interface Error {
  error: HttpError;
  req: express.Request;
  res: express.Response;
  next: express.NextFunction;
}

export interface Main {
  req: express.Request;
  res: express.Response;
  next?: express.NextFunction;
}

// export interface Common {
//   req: express.Request;
//   res: express.Response;
//   next?: express.NextFunction;

// }
