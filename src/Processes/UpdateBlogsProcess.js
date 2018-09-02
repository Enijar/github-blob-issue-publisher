const config = require('../config');
const FetchBlogs = require('../Functions/FetchBlogs');
const UpdateBlogs = require('../Functions/UpdateBlogs');

(async function UpdateBlogsProcess() {
    try {
        console.info('Fetching blogs...');
        const blogs = await FetchBlogs();

        console.info('Updating blogs data...');
        await UpdateBlogs(blogs);

        console.info('Finished');
    } catch (err) {
        console.error(err);
    }

    setTimeout(UpdateBlogsProcess, config.processUpdateBlogsTimeout);
})();
