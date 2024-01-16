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

import register from './auth/routes/register';
import login from './auth/routes/login';
import adminauth from './admin/routes/adminauth';
import item from './admin/routes/item';
import client from './client/routes/client';
import clientedit from './admin/routes/client';

import setonlineuser from './utils/setonlineuser';
import setofflineuser from './utils/setofflineuser';

const app = express();
const server = http.createServer(app);

import mongoose from 'mongoose';

app.use(express.static(path.join(__dirname, '../public/ui')));
//app.use(express.static('uploads'));
const staticPath = path.join(__dirname, '../public/ui');
app.use(express.urlencoded({
  extended: false
}));

app.use(cors());

const io = socket(server, {
  cors: {
    origin: [`${process.env.baseurl}`, `${process.env.wwwbaseurl}`],
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization"],
    credentials: true
  }
});

let ioInstance;

function initSocketIO() {
  io.on('connection', async (socket) => {
    const userid = socket.handshake.query.userid;

    if (userid) {
      const onlineuser = await setonlineuser(userid);

      if (onlineuser) {
        socket.user = onlineuser;

        console.log(socket.user, 'connected');
        io.emit('useractivity');
      }
    } else {
      console.log('admin connected');
    }

    socket.on('disconnect', () => {
      if (socket.user) {
        console.log(socket.user, 'disconnected');
        setofflineuser(socket.user)

        io.emit('useractivity');
      }
    })
  });

  ioInstance = io;
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(register);
app.use(login);
app.use(adminauth);
app.use(item);
app.use(client);
app.use(clientedit);

app.get('*', (req, res) => {
  //res.sendFile(path.join(staticPath, 'index.html'));
});

const PORT = process.env.PORT || 8081;

function getIO() {
  if (!ioInstance) {
    throw new Error("IO not initialized");
  }

  return ioInstance;
};

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

    initSocketIO();

    return console.log(`server started on port here now ${PORT}`);
  });
});

export { getIO, initSocketIO };