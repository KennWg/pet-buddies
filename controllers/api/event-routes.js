const router = require('express').Router();
const { User, Event } = require("../../models");

//GET all route
router.get('/', (req, res) => {
    Event.findAll({
        attributes: [
            'id',
            'name',
            'breed',
            'age',
            'size',
            'description'
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