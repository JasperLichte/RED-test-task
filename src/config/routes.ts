import HelloHandler from '../Infrastructure/Handler/HelloHandler.js';

type Route = {
    path: string,
    method: 'GET'|'POST'|'PUT'|'DELETE',
    handler: any
};

const routes: Route[] = [
    {path: '/', method: 'GET', handler: HelloHandler,}
];

export default routes;
