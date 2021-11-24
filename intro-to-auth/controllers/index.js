const usersRouter = require('express').Router();

const User = require('../models/user');

usersRouter.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        res.render('home.ejs');
    })
})

module.exports = usersRouter;