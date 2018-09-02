const request = require('superagent');
const {BLOG_LABEL_NAME, USERNAME, REPOSITORY} = require('../consts');

const filterIssues = issue => {
    return issue.labels.find(label => label.name.toLowerCase() === BLOG_LABEL_NAME);
};

const formatIssues = issue => {
    const {id, title, body} = issue;
    const slug = title.replace(/\W+/, '-').toLowerCase();
    return {id, slug, title, body};
};

/**
 * Get issues from github repository
 *
 * TODO: Limit issues to those labeled with "BLOG_LABEL_NAME"
 *
 * @returns {Promise}
 */
module.exports = () => new Promise((resolve, reject) => {
    request
        .get(`https://api.github.com/repos/${USERNAME}/${REPOSITORY}/issues`)
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
