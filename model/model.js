const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    course: { type: String }
})

module.exports = mongoose.model('studentsData',dataSchema)