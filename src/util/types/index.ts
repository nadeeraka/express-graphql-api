
import "reflect-metadata";
import express from "express";
import { HttpError } from "routing-controllers";

export type  Resolvers = (parent:any, args:any,context:any, info:any)=>any

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
  payload?:{userId:string}
}

export interface ResolverMap {
  [key:string]:{
    [key:string]:Resolvers
  }
}