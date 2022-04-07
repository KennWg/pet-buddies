const router = require('express').Router();
const { User, Event, Comment } = require("../../models");
const userAuth = require('../../utils/userAuth');

//GET all route
router.get('/', (req, res) => {
    Event.findAll({
        attributes: [
            'id',
            'title',
            'details',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET event by ID
router.get('/:id', (req, res) => {
    Event.findOne({
        attributes: [
            'id',
            'title',
            'details',
            'user_id'
        ],
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'No event found with this id' });
            return;
        }
        res.json(data);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST event
router.post('/', userAuth, (req, res) => {
    Event.create({
        title: req.body.title,
        user_id: req.session.user_id,
        details: req.body.details
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;