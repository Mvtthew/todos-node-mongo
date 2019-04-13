const Todo = require('./modules/Todo');

exports.getAllTodos = (req, res) => {
    Todo.find()
        .then(items => res.json(items));
};

exports.createTodo = (req, res) => {

    const todo = new Todo({
        name: req.body.name
    });

    todo.save().then(() => {
        res.json({
            'message': 'Todo created!',
        });
    });
};