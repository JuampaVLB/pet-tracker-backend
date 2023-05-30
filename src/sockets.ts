import { Server, Socket } from 'socket.io';
import Post from './models/post.model';

const sockets = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    socket.on("client:post", async () => {
        console.log("me emitieron un post")
        try { 
            const posts = await Post.find();
            socket.broadcast.emit('server:loadposts', posts);
        } catch (error) {
            console.log(error);
        }
    })
  });
};

export default sockets;
