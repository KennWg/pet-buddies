const { Event } = require('../models');

const eventdata = [
    {
        title: 'Sept 4th - Dog Party',
        event: 'Come join us at Central Park!',
        user_id: 1
    },
    {
        title: 'Dog walking - anybody need a friend?',
        event: 'Looking for a friend for my dog in August, anyone interested?',
        user_id: 2
    },
    {
        title: 'Dog birthday bash!',
        event: 'My dog\'s birthday is this weekend, looking for some dog friends to celebrate with',
        user_id: 4
    }
];

const seedEvents = () => Event.bulkCreate(eventdata);

module.exports = seedEvents;