const { Comment } = require('../models');

const commentdata = [
    {
        comment: 'I\'ll be there!',
        user_id: 2,
        event_id: 1
    },
    {
        comment: 'Great, see you there!',
        user_id: 1,
        event_id: 1
    },
    {
        comment: 'I\'m interested, when were you thinking?',
        user_id: 5,
        event_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;