const BlogPageController = require('./Controllers/BlogPageController');
const HomePageController = require('./Controllers/HomePageController');
const AppController = require('./Controllers/AppController');

module.exports = app => {
    app.get('/:slug', BlogPageController);
    app.get('/', HomePageController);
    app.get('*', AppController);
};
