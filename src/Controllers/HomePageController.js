const fs = require('fs');
const path = require('path');
const config = require('../config');

module.exports = (req, res) => {
    const blogs = JSON.parse(fs.readFileSync(config.blogsFile) || '[]');
    const layoutHtml = fs.readFileSync(path.join(config.viewsPath, 'layout', 'app.html'), 'utf-8');

    let html = blogs.map(blog => `
        <a href="${blog.slug}">
            <h2>${blog.title}</h2>
        </a>
    `);

    html = `<h1>All Blogs</h1>${html.join('')}`;

    res.write(layoutHtml.split('::content::').join(html));
    res.end();
};
