const Todo = require('./modules/Todo');

// Getting all
exports.getAllTodos = (req, res) => {

    Todo.find()
        .then(items => res.json(items));
};

// Creating new
exports.createTodo = (req, res) => {

    const todo = new Todo({
        name: req.body.name
    });

    todo.save().then(() => {
        res.json(todo);
    });
};

// Updating
exports.updateTodo = (req, res) => {

    Todo.findOneAndUpdate(req.body.id, {
        name: req.body.name,
        done: req.body.done,
    }).then(() => {
        res.json({
            'message': 'Todo updated',
        });
    });
};

// Deleting
exports.deleteTodo = (req, res) => {

    Todo.findOneAndDelete(req.body.id).then(() => {
        res.json({
            'message': 'Todo deleted',
        });
    });
};