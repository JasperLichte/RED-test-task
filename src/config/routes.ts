import HelloHandler from '../Infrastructure/Handler/HelloHandler.js';
import Task1Handler from '../Infrastructure/Handler/Tasks/Task1Handler.js';
import Task2Handler from '../Infrastructure/Handler/Tasks/Task2Handler.js';
import Task3Handler from '../Infrastructure/Handler/Tasks/Task3Handler.js';
import Task4Handler from '../Infrastructure/Handler/Tasks/Task4Handler.js';

type Route = {
    path: string,
    method: 'GET'|'POST'|'PUT'|'DELETE',
    handler: any
};

const routes: Route[] = [
    {path: '/', method: 'GET', handler: HelloHandler,},
    {path: '/task1', method: 'GET', handler: Task1Handler,},
    {path: '/task2', method: 'GET', handler: Task2Handler,},
    {path: '/task3', method: 'GET', handler: Task3Handler,},
    {path: '/task4', method: 'GET', handler: Task4Handler,},
];

export default routes;
