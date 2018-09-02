const fs = require('fs');
const path = require('path');
const config = require('../config');
const showdown = require('showdown');

module.exports = () => {
    const blogs = JSON.parse(fs.readFileSync(config.blogsFile, 'utf-8') || '[]');

    blogs.map(blog => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(blog.body);
        fs.writeFileSync(path.join(config.pagesPath, `${blog.slug}.html`), html, 'utf-8');
    });
};
