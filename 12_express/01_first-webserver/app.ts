// for installing all dependencies once run 'npm install'
// for starting the server run 'npm start'
// for starting the server in watchmode run 'npm run server-dev'

// import modules
import express from "express";
import { join } from "path";

// create express application
const app = express();

// respond with index.html to a HTTP GET request at route "/"
app.get("/", function (request, response) {
    const file: string = join(__dirname, "public/index.html");
    response.sendFile(file);
});

// respond with "hello john" to a HTTP GET request at route "/john"
app.get("/john", function (request, response) {
    response.status(200).send("hello john");
});

// respond with "hello <name>" to a HTTP GET request at route "/<name>" 
// by using a route parameter for capturing the value from the URL
app.get("/:name", function (request, response) {
    response.send(`hello ${request.params.name}`);
});

// start http server
app.listen(3000, function () {
    console.log("Server listening on port 3000");
});