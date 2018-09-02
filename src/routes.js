const BlogPageController = require('./Controllers/BlogPageController');
const AppController = require('./Controllers/AppController');

module.exports = app => {
    app.get('/:page', BlogPageController);
    app.get('*', AppController);
};
