const path = require('path');
const env = require('../env');

module.exports = {
    blogLabel: env.blogLabel,
    username: env.username,
    repository: env.repository,
    blogsFile: path.resolve(__dirname, '..', 'storage', 'blogs.json'),
    publicPath: path.resolve(__dirname, '..', 'public'),
    viewsPath: path.resolve(__dirname, '..', 'views'),
    port: 3000
};
