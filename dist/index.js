"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./database");
const socket_io_1 = require("socket.io");
const sockets_1 = __importDefault(require("./sockets"));
const http_1 = __importDefault(require("http"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
const pet_routes_1 = __importDefault(require("./routes/pet.routes"));
const app = (0, express_1.default)();
// Settings
app.use(express_1.default.json());
// Routes
app.use('/api/v1/auth', auth_routes_1.default);
app.use('/api/v1/post', post_routes_1.default);
app.use('/api/v1/pet', pet_routes_1.default);
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*"
    }
});
(0, sockets_1.default)(io);
server.listen(process.env.PORT || 3000, () => {
    console.log(`App running on ports ${process.env.port || 3000}`);
});
