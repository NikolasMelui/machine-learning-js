// import http from 'http';
import brain from 'brain.js';
import {} from 'dotenv/config';
// import { getServerHost, getServerPort } from './helpers';
const network = new brain.NeuralNetwork();
network.train([
  { input: [60, 150], output: [1] },
  { input: [30, 60], output: [0] },
  { input: [73, 250], output: [1] }
]);
const result = network.run([70, 200]);
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
