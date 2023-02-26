// import modules
import express from 'express';
import { StatusCodes } from 'http-status-codes';

// create data storage
const fruits: string[] = ['apple', 'banana', 'peach'];

// create router
export const fruitRouter = express.Router();

// return all fruits
fruitRouter.get('/', (req, res) => {
    res.status(StatusCodes.OK).json(fruits);
});

// return one fruit
fruitRouter.get('/:index', (req, res) => {
    const index: number = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= fruits.length) {
        res.sendStatus(StatusCodes.NOT_FOUND);
        return;
    }
    res.status(StatusCodes.OK).json(fruits[index]);
});

// add fruit
fruitRouter.post('/', (req, res) => {
    const fruit: unknown = req.body.fruit;
    if (typeof fruit !== 'string' || fruit.trim().length === 0) {
        res.status(StatusCodes.BAD_REQUEST).send('fruit missing or not ok');
        return;
    }
    fruits.push(fruit);
    res.status(StatusCodes.CREATED).json(fruit);
});

// delete all fruits
fruitRouter.delete('/', (req, res) => {
    fruits.splice(0);
    res.sendStatus(StatusCodes.NO_CONTENT);
});

// delete one fruit
fruitRouter.delete('/:index', (req, res) => {
    const index: number = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= fruits.length) {
        res.sendStatus(StatusCodes.NOT_FOUND);
        return;
    }
    fruits.splice(index, 1);
    res.sendStatus(StatusCodes.NO_CONTENT);
});