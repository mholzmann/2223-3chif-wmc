// for installing all dependencies once run 'npm install'
// for starting the server run 'npm start'
// for starting the server in watchmode run 'npm run server-dev'

// import modules
import express from 'express';
import { join } from 'path';
import { fruitRouter } from './fruit-router';

// create express application
const app = express();

// mount middleware
app.use(express.json());    // parse JSON data and place result in req.body
app.use(express.static(join(__dirname, 'public'), { extensions: ['html'] }));  // serve frontend

// mount router(s)
app.use('/api/fruits', fruitRouter);

// start http server
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});