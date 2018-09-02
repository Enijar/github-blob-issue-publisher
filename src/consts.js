const path = require('path');

const BLOG_LABEL_NAME = 'blog';
const USERNAME = 'Enijar';
const REPOSITORY = 'web-user-activity-recorder';
const BLOGS_FILE = path.resolve(__dirname, '..', 'storage', 'blogs.json');

module.exports = {
    BLOG_LABEL_NAME,
    USERNAME,
    REPOSITORY,
    BLOGS_FILE
};
