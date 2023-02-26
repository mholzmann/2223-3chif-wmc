// for installing all dependencies once run 'npm install'
// for starting the server run 'npm start'
// for starting the server in watchmode run 'npm run server-dev'

// import modules
import express from 'express';
import { join } from 'path';

// create express application
const app = express();

// mount middleware to serve static files
const path = join(__dirname, 'public');
const options = { extensions: ['html'] };
app.use(express.static(path, options));  

// start http server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});