import express from "express";
import "reflect-metadata";
import { HttpError } from "routing-controllers";

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
