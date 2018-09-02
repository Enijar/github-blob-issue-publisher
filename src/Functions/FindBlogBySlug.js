const fs = require('fs');
const config = require('../config');

module.exports = slug => {
    if (!fs.existsSync(config.blogsFile)) {
        return null;
    }

    const blogs = JSON.parse(fs.readFileSync(config.blogsFile, 'utf-8') || '[]');
    return blogs.find(blog => blog.slug === slug) || null;
};
