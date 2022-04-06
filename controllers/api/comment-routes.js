const router = require('express').Router();
const { User, Comment } = require("../../models");
const userAuth = require('../../utils/userAuth');

//GET all route
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
            'id',
            'event_id',
            'user_id',
            'comment'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET comment by ID
router.get('/:id', (req, res) => {
    Comment.findOne({
        attributes: [
            'id',
            'event_id',
            'user_id',
            'comment'
        ],
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(data);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST comment
router.post('/', userAuth, (req, res) => {
    Comment.create({
        event_id: req.body.event_id,
        user_id: req.body.user_id,
        comment: req.body.comment
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;