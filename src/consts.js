const path = require('path');

const BLOG_LABEL_NAME = 'blog';
const USERNAME = 'Enijar';
const REPOSITORY = 'github-blob-issue-publisher';
const BLOGS_FILE = path.resolve(__dirname, '..', 'storage', 'data', 'blogs.json');
const PAGES_PATH = path.resolve(__dirname, '..', 'storage', 'pages');

module.exports = {
    BLOG_LABEL_NAME,
    USERNAME,
    REPOSITORY,
    BLOGS_FILE,
    PAGES_PATH
};
