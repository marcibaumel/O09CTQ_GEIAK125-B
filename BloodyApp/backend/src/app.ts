import 'reflect-metadata';
import {createConnection} from 'typeorm';
import { connectionOptions } from './ormconfig';

import express from 'express'
const app = express();

app.get('/', (req, res, next)=>{
  res.send('hello');
})

app.listen(5000, ()=> console.log('Server running'));


createConnection(connectionOptions).then(async connection => {
  console.log('Connected to database.');

  // TODO: set up server

}).catch(error => console.log(error));
