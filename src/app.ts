import express, { Express, Request, Response, NextFunction } from 'express';
import connectDB from './mongodb';
import bodyParser from 'body-parser';

import { ApiRouter } from './routes/api-routes';
 
const port = 5000;

const app: Express = express();
const apiRouter = new ApiRouter;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('', apiRouter.router)

connectDB()
 
app.listen(port, () => {
  console.log('server is running on http://localhost:5000')}
);