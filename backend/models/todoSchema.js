const mongoose = require('mongoose')

const todosSchema = new mongoose.Schema({
    discription: {
        type: String,
        required: true,
        min:3
    },
    responsible: {
        type: String,
        required: true,
        min: 3
    },
    priority: {
        type: String,
        required: true,
        min: 3
    },
    
    isCompleted: Boolean

})



const todos = mongoose.model('todos', todosSchema);
module.exports = todos