const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
    skill: String,
    level: String
})

module.exports = mongoose.model('Skill', skillsSchema);
