// import modules
import express from 'express';
import { StatusCodes } from 'http-status-codes';

// create data storage
const fruits: string[] = ['apple', 'banana', 'peach'];

// create router
export const fruitRouter = express.Router();

// return all fruits
fruitRouter.get('/', function (request, response) {
    response.status(StatusCodes.OK).json(fruits);
});

// return one fruit
fruitRouter.get('/:index', function (request, response) {
    const index: number = parseInt(request.params.index);
    if (isNaN(index) || index < 0 || index >= fruits.length) {
        response.sendStatus(StatusCodes.NOT_FOUND);      
        return;
    }
    response.status(StatusCodes.OK).json(fruits[index]);
});

// add fruit
fruitRouter.post('/', function (request, response) {
    const fruit: any = request.body.fruit;
    if (typeof fruit !== 'string' || fruit.trim().length === 0) {
        response.status(StatusCodes.BAD_REQUEST).send('fruit missing or not ok');
        return;
    }
    fruits.push(fruit);
    response.status(StatusCodes.CREATED).json(fruit);
});

// delete all fruits
fruitRouter.delete('/', function (request, response) {
    fruits.splice(0);
    response.sendStatus(StatusCodes.NO_CONTENT);
});

// delete one fruit
fruitRouter.delete('/:index', function (request, response) {
    const index: number = parseInt(request.params.index);
    if (isNaN(index) || index < 0 || index >= fruits.length) {
        response.sendStatus(StatusCodes.NOT_FOUND);
        return;
    }
    fruits.splice(index, 1);
    response.sendStatus(StatusCodes.NO_CONTENT);
});

