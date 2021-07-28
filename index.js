require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const postsRouter = require("./Routers/posts");
const clientsRouter = require("./Routers/clients");

const app = express();
const port = process.env.PORT || 3000;
// const port = 3000;
console.log(`My App listening on port ${port}!`);
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/posts", postsRouter);
app.use("/clients", clientsRouter);

// app.get("/", (req, res) => {
//   res.send("Welcome!");
// });

// app.post("/api/posts", (req, res) =>{
 
//     res.json(req.body);

// })

app.listen(port);
console.log(`My Blog App listening on port ${port}!`);
