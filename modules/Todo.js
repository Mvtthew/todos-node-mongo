const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    }
});

module.exports = Todo = mongoose.model('Todo', ItemSchema);