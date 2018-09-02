const FetchBlogs = require('../Functions/FetchBlogs');
const UpdateBlogs = require('../Functions/UpdateBlogs');

(async () => {
    try {
        console.info('Fetching blogs...');
        const blogs = await FetchBlogs();

        console.info('Updating blogs data...');
        await UpdateBlogs(blogs);

        console.info('Finished');
    } catch (err) {
        console.error(err);
    }
})();
