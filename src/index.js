const FetchNewBlogs = require('./Commands/FetchNewBlogs');
const SaveNewBlogs = require('./Commands/SaveNewBlogs');

(async () => {
    try {
        const newBlogs = await FetchNewBlogs();
        await SaveNewBlogs(newBlogs);
    } catch (err) {
        console.error(err);
    }
})();
