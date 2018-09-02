const fs = require('fs');
const path = require('path');
const config = require('../config');
const FindBlogBySlug = require('../Functions/FindBlogBySlug');

module.exports = (req, res) => {
    const {slug} = req.params;
    const blog = FindBlogBySlug(slug);

    if (!blog) {
        res.status(404);
        res.write('404 Page Not Found');
        res.end();
        return;
    }

    const layoutHtml = fs.readFileSync(path.join(config.viewsPath, 'layout', 'app.html'), 'utf-8');
    const html = layoutHtml.split('::content::').join(blog.html);

    res.write(html);
    res.end();
};
