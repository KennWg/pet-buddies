const router = require('express').Router();
const { User, Pet } = require('../models');

//get user profile
router.get('/:id', (req,res) => {
    User.findByPk(req.params.id, {
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Pet,
                attributes: ['id', 'name', 'breed', 'age', 'size', 'description']
            }
        ]
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        const profile =  data.get({plain: true});
        res.render('user-profile', profile);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;