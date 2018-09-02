const fs = require('fs');
const config = require('../config');

const removeExistingBlogs = oldBlogs => newBlog => {
    return !oldBlogs.find(oldBlog => oldBlog.id === newBlog.id);
};

/**
 * Add new blogs to beginning of JSON file
 *
 * @param {Array} newBlogs
 * @returns {Promise}
 */
module.exports = newBlogs => new Promise((resolve, reject) => {
    try {
        let blogs = newBlogs;

        if (fs.existsSync(config.blogsFile)) {
            const oldBlogs = JSON.parse(fs.readFileSync(config.blogsFile, 'utf-8') || '[]');
            blogs = oldBlogs.filter(removeExistingBlogs(newBlogs)).concat(newBlogs);
        }

        fs.writeFileSync(config.blogsFile, JSON.stringify(blogs, null, 2), 'utf-8');

        resolve();
    } catch (err) {
        reject(err);
    }
});
