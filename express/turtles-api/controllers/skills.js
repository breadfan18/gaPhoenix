const express = require('express');
const skillsRouter = express.Router();
const Skill = require('../models/skill');


skillsRouter.get('/', async (req, res) => {
    const skills = await Skill.find({})
    res.json(skills)
})

skillsRouter.post('/addSkill', async (req, res) => {
    const skill = await Skill.create(req.body)
    res.send(skill)  
})

 module.exports = skillsRouter