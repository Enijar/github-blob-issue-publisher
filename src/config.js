const path = require('path');

module.exports = {
    blogLabel: 'blog',
    username: 'Enijar',
    repository: 'github-blob-issue-publisher',
    blogsFile: path.resolve(__dirname, '..', 'storage', 'blogs.json'),
    publicPath: path.resolve(__dirname, '..', 'public'),
    viewsPath: path.resolve(__dirname, '..', 'views'),
    port: 3000
};
