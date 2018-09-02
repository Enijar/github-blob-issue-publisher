const request = require('superagent');
const config = require('../config');

const filterIssues = issue => {
    return issue.labels.find(label => label.name.toLowerCase() === config.blogLabel);
};

const formatIssues = issue => {
    const {id, title, body} = issue;
    const slug = title.replace(/[\W\s]+/g, '-').toLowerCase();
    return {id, slug, title, body};
};

/**
 * Get issues from github repository
 *
 * TODO: Limit issues to those labeled with "config.blogLabel"
 *
 * @returns {Promise<Array>}
 */
module.exports = () => new Promise((resolve, reject) => {
    request
        .get(`https://api.github.com/repos/${config.username}/${config.repository}/issues`)
        .send()
        .end((err, res) => {
            if (err) {
                reject(err);
                return;
            }

            const blogs = res.body.filter(filterIssues).map(formatIssues);
            resolve(blogs);
        });
});
