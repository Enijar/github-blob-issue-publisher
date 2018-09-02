const fs = require('fs');
const path = require('path');
const config = require('../config');

module.exports = (req, res) => {
    const {page} = req.params;
    const pageFile = path.join(config.pagesPath, `${page}.html`);

    if (!fs.existsSync(pageFile)) {
        res.status(404);
        res.write('404 Page Not Found');
        res.end();
        return;
    }

    const layoutHtml = fs.readFileSync(path.join(config.viewsPath, 'layout', 'app.html'), 'utf-8');
    const blogHtml = fs.readFileSync(pageFile, 'utf-8');
    const html = layoutHtml.split('::content::').join(blogHtml);

    res.write(html);
    res.end();
};
