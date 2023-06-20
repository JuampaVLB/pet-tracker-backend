import express from "express";
import './database';
import { Server } from "socket.io";
import sockets from "./sockets";
import http from "http";
import authRoutes from './routes/auth.routes';
import postRoutes from './routes/post.routes';
import petRoutes from './routes/pet.routes';
const app = express();

// Settings
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/pet', petRoutes);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

sockets(io);

server.listen(process.env.PORT || 3000, () => {
    console.log(`App running on ports ${process.env.port || 3000}`);
});