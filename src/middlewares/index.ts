const express = require('express');
const Morgan = require('morgan');
const Helmet = require('helmet');
const Cors = require('cors');


// custome

const app = express();

 notfound = (req, res, next) => {
  const error = new Error(`Not found ${req.originalUrl}`);
  res.status('404');
  next(error);
};
// eslint-disable-next-line 
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500: res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '):' : error.stack,
  });
};
//  const morgan = app.use(Morgan('common'));
//  const helmet = app.use(Helmet());
//  const cors = app.use(Cors({
//  origin:'http://localhost:3000',
// }));


// eslint-disable-next-line 
  module.exports = {
    notfound,
    errorHandler,
  };

  