const BlogPageController = require('./Controllers/BlogPageController');
const AppController = require('./Controllers/AppController');

module.exports = app => {
    app.get('/:slug', BlogPageController);
    app.get('*', AppController);
};
