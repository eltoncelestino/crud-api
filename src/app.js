import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

mongoose.connect("mongodb://localhost:27017/api_teste", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);

// export default server;