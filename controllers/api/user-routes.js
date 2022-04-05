const router = require('express').Router();
const { User, Pet, Comment, Event } = require("../../models");

//GET all route
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET user by ID
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Pet,
                attributes: ['id', 'name', 'breed', 'age', 'size', 'description']
            },
            {
                model: Event,
                attributes: ['id', 'event'],
                include: {
                    model: Comment,
                    attributes: ['title']
                }
            },
            {
                model: Comment,
                //attributes:  To be added
            }
        ]
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(data);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city
    })
        .then(data => {
            req.session.save(() => {
                req.session.user_id = data.id;
                req.session.username = data.username;
                req.session.loggedIn = true;

                res.json(data);
            });
        })
});

module.exports = router;