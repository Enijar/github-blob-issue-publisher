const path = require('path');
const env = require('../env');

module.exports = {
    blogLabel: env.blogLabel,
    username: env.username,
    repository: env.repository,
    blogsFile: path.resolve(__dirname, '..', 'storage', 'data', 'blogs.json'),
    pagesPath: path.resolve(__dirname, '..', 'storage', 'pages'),
    publicPath: path.resolve(__dirname, '..', 'public'),
    viewsPath: path.resolve(__dirname, '..', 'views'),
    port: 3000
};
