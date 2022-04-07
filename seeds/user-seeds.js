const { User } = require('../models');

const userdata = [
    {
        username: 'alesmonde0',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123',
        address: '123 street',
        city: 'Toronto'
    },
    {
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password123',
        address: '21 long street',
        city: 'Toronto'
    },
    {
        username: 'iboddam2',
        email: 'cstoneman2@last.fm',
        password: 'password123',
        address: '123 thatroad',
        city: 'Toronto'
    },
    {
        username: 'dstanmer3',
        email: 'ihellier3@goo.ne.jp',
        password: 'password123',
        address: '125 gostreet',
        city: 'Mississauga'
    },
    {
        username: 'djiri4',
        email: 'gmidgley4@weather.com',
        password: 'password123',
        address: '43 Yonge',
        city: 'Toronto'
    },
    {
        username: 'msprague5',
        email: 'larnout5@imdb.com',
        password: 'password123',
        address: '123 Main',
        city: 'Markham'
    },
    {
        username: 'mpergens6',
        email: 'hnapleton6@feedburner.com',
        password: 'password123',
        address: '52 burner street',
        city: 'Scarborough'
    },
    {
        username: 'tpenniell7',
        email: 'kperigo7@china.com.cn',
        password: 'password123',
        address: '123 capitalstreet',
        city: 'Ottawa'
    },
    {
        username: 'msabbins8',
        email: 'lmongain8@google.ru',
        password: 'password123',
        address: '123 oldestreet',
        city: 'Markham'
    },
    {
        username: 'jmacarthur9',
        email: 'bsteen9@epa.gov',
        password: 'password123',
        address: '123 wavyroad',
        city: 'Mississauga'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;