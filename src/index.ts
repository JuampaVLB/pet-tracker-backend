import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    socket.on('mensaje', (data) => {
        console.log('Mensaje recibido:', data);
    });
});

server.listen(process.env.port || 3000, () => {
    console.log(`App running on port ${process.env.port || 3000}`);
});