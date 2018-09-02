const FetchBlogs = require('./Commands/FetchBlogs');
const CreateOrUpdateBlogs = require('./Commands/CreateOrUpdateBlogs');

(async () => {
    try {
        const blogs = await FetchBlogs();
        await CreateOrUpdateBlogs(blogs);
    } catch (err) {
        console.error(err);
    }
})();
