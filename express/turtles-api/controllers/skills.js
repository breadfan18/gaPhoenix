const express = require('express');
const skillsRouter = express.Router();
const Skill = require('../models/skill');


skillsRouter.get('/', (req, res) => {
    Skill.find({}, (err, skills) => {
        res.json(skills)
    })
})
