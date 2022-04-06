const router = require('express').Router();
const { User, Pet } = require("../../models");

//GET all route
router.get('/', (req, res) => {
    Pet.findAll({
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

//GET pet by ID
router.get('/:id', (req, res) => {
    Pet.findOne({
        attributes: [
            'id',
            'name',
            'breed',
            'age',
            'size',
            'description'
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
            res.status(404).json({ message: 'No pet found with this id' });
            return;
        }
        res.json(data);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST pet
router.post('/', (req, res) => {
    Pet.create({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        size: req.body.size,
        description: req.body.description
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;