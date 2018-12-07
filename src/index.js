// import http from 'http';
import brain from 'brain.js';
import {} from 'dotenv/config';
// import { getServerHost, getServerPort } from './helpers';
const network = new brain.NeuralNetwork();
network.train();
const result = network.run();
console.log(result);

// http
//   .createServer((req, res) => {
//     res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
//     res.end(
//       `Hello from ${getServerHost(req)}:${getServerPort(
//         req
//       )} and welcome to the multikey-node-boilerplate!`
//     );
//   })
//   .listen(process.env.SERVER_PORT, () =>
//     console.log(`Server is listening on port ${process.env.SERVER_PORT}`)
//   );
