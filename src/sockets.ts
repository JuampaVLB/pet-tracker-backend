import { Server, Socket } from 'socket.io';
import Post from './models/post.model';

const sockets = (io: Server) => {
  io.on('connection', (socket: Socket) => {

    socket.on('client:comment', async (room) => {
      try {
        const comments = await Post.find({ room }, 'comments');
        console.log(comments);
        socket.broadcast.emit('server:loadcomments', comments);
      } catch (error) {
        console.log(error);
      }
    })

    socket.on("client:post", async () => {
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
