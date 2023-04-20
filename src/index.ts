import * as http from 'http';
import HandlerFactory from './Infrastructure/Handler/Factory/HandlerFactory.js';
import ErrorHandler from './Infrastructure/Handler/Errorhandler.js';


const port = 3000;

const server = http.createServer((req, res) => {
  try {
    (new HandlerFactory()).buildByRequest(req, res).run();
  } catch(err) {
    new ErrorHandler(err).setRequest(req).setResponse(res).run();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
