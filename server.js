const express = require('express');
const mongoose = require('mongoose');
const task = require('./api/models/todoListModel');
const bodyParser = require('body-parser');
const routes = require('./api/routes/todoListRoutes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todoDB', {useNewUrlParser: true, useUnifiedTopology: true});

// Middlewares 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialized routes
routes(app);

app.listen(port);
console.log(`Server is listening on port ${port}`);