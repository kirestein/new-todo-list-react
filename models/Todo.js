const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
    description: String
})

module.exports = Todo