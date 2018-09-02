const fs = require('fs');
const path = require('path');
const {BLOGS_FILE, PAGES_PATH} = require('../consts');
const showdown = require('showdown');

module.exports = () => {
    const blogs = JSON.parse(fs.readFileSync(BLOGS_FILE, 'utf-8') || '[]');

    blogs.map(blog => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(blog.body);
        fs.writeFileSync(path.join(PAGES_PATH, `${blog.slug}.html`), html, 'utf-8');
    });
};
