import {IncomingMessage, ServerResponse} from 'http';
import Handler from '../Handler.js';
import routes from '../../../config/routes.js';

class HandlerFactory {
    private build<T extends Handler>(type: {new(): T;}) {
        return (req, res): Handler => {
            if (!(req instanceof IncomingMessage)) {
                throw new Error('Invalid Request Object');
            }
    
            if (!(res instanceof ServerResponse)) {
                throw new Error('Invalid Response Object');
            }
    
            return (new type()).setRequest(req).setResponse(res);
        }
    }

    public buildByRequest(req, res): Handler {
        for(const route of routes) {
            if (route.path === req.url && route.method === req.method) {
                return this.build(route.handler)(req, res);
            }
        }
        throw new Error('No Matching route found!');
    }
}

export default HandlerFactory;
