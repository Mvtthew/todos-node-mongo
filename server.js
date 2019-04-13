const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Support for encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB connect
mongoose.connect('mongodb://admin:rootpass@127.0.0.1:27017/admin', {
    useNewUrlParser: true
});

// API Routes
const routes = require('./routes');
app.get('/api/todos', routes.getAllTodos);
app.post('/api/todo', routes.createTodo);

app.listen(3000, function () {
    console.log('API on port 3000!');
});