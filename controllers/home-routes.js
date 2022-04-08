const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Event } = require('../models');

// get all events for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Event.findAll({
    attributes: [
      'id',
      'title',
      'details',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/event/:id', (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'details',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username', 'id']
        }
      },
      {
        model: User,
        attributes: ['username', 'id']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No event found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
