const fs = require('fs');
const config = require('../config');
const GetHtmlForBlog = require('../Functions/GetHtmlForBlog');

/**
 * Add new blogs to beginning of JSON file
 *
 * TODO: Improve efficiency, by updating/deleting blogs that change, not all blogs
 *
 * @param {Array} blogs
 * @returns {Promise}
 */
module.exports = (blogs = []) => new Promise((resolve, reject) => {
    try {
        blogs = blogs.map(blog => {
            blog.html = GetHtmlForBlog(blog);
            return blog;
        });

        fs.writeFileSync(config.blogsFile, JSON.stringify(blogs, null, 2), 'utf-8');

        resolve();
    } catch (err) {
        reject(err);
    }
});
