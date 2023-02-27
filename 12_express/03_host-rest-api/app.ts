// for installing all dependencies once run 'npm install'
// for starting the server run 'npm start'
// for starting the server in watchmode run 'npm run server-dev'

// import modules
import express from 'express';
import cors from 'cors';
import { fruitRouter } from './fruit-router';

// create express application
const app = express();

// mount middleware
app.use(cors());            // enable Cross-Origin Resorce Sharing
app.use(express.json());    // parse JSON data and place result in req.body

// mount router(s)
app.use('/api/fruit', fruitRouter);

// start http server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});