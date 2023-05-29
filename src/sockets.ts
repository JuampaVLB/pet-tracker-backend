import { Server, Socket } from 'socket.io';

export default (io: Server) => {

    io.on('connection', (socket: Socket) => {
        socket.on('connect', () => {
            console.log('Se ha establecido la conexión con el cliente.');
          });
    })
   
}