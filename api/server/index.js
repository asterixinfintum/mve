if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import socket from 'socket.io';
import cron from "node-cron";

import register from './auth/routes/register';
import login from './auth/routes/login';
import adminauth from './admin/routes/adminauth';
import item from './admin/routes/item';
import client from './client/routes/client';
import clientedit from './admin/routes/client';

const app = express();
const server = http.createServer(app);

import mongoose from 'mongoose';

app.use(express.static('public'));
app.use('/', express.static('public/ui'))
//app.use(express.static('uploads'));
app.use(express.urlencoded({
  extended: false
}));

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(register);
app.use(login);
app.use(adminauth);
app.use(item);
app.use(client);
app.use(clientedit);
const PORT = process.env.PORT || 8080;

mongoose.connect(`${process.env.DB}`, {
    //mongodb://db:27017/traderapiv2 =====> production
    //mongodb://127.0.0.1:27017/traderapiv2 ===> development
  
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(async () => {
    console.log('connected to database');
  
    server.listen(PORT, async (error) => {
      if (error) {
        return error;
      }
  
      return console.log(`server started on port here now ${PORT}`);
    });
  });