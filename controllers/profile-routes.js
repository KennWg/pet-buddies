const router = require('express').Router();
const { Pet } = require('../models');
const userAuth = require('../utils/userAuth');

//get all pets for owner
router.get('/', userAuth, (req, res) => {
    Pet.findAll({
        attributes: [
            'id',
            'user_id',
            'name',
            'breed',
            'age',
            'size',
            'description'
        ],
        where: {
            user_id: req.session.user_id
        }
    })
        .then(profilePets => {
            const pets = profilePets.map(pet => pet.get({ plain: true }));

            res.render('profile', {
                pets,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;