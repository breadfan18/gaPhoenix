const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
    skill: String,
    level: String
}, {versionKey: '_swaroop'})

module.exports = mongoose.model('Skill', skillsSchema);
