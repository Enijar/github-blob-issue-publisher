const fs = require('fs');
const {BLOGS_FILE} = require('../consts');

const removeExistingBlogs = oldBlogs => newBlog => {
    return !oldBlogs.find(oldBlog => oldBlog.id === newBlog.id);
};

/**
 * Add new blogs to beginning of JSON file.
 *
 * @param {Array} newBlogs
 * @returns {Promise}
 */
module.exports = newBlogs => new Promise((resolve, reject) => {
    try {
        let blogs = [];

        if (fs.existsSync(BLOGS_FILE)) {
            const oldBlogs = JSON.parse(fs.readFileSync(BLOGS_FILE, 'utf-8') || '[]');
            blogs = newBlogs.filter(removeExistingBlogs(oldBlogs)).concat(oldBlogs);
        }

        fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), 'utf-8');

        resolve();
    } catch (err) {
        reject(err);
    }
});
