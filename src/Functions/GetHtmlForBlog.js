const showdown = require('showdown');

module.exports = blog => {
    const converter = new showdown.Converter();
    return converter.makeHtml(blog.body);
};
