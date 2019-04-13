const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('express-group-routes');
const app = express();

// Support for encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB connect
mongoose.connect('mongodb://admin:rootpass@mongo:27017/admin', {
    useNewUrlParser: true
});

// API Routes
const routes = require('./routes');
app.group('/api', (router) => {
    router.get('/todos', routes.getAllTodos);
    router.post('/todo', routes.createTodo);
    router.put('/todo', routes.updateTodo);
    router.delete('/todo', routes.deleteTodo);
});

app.listen(3000, function () {
    console.log('API on port 3000!');
});