const config = require('../config');
const FetchBlogs = require('../Functions/FetchBlogs');
const UpdateBlogs = require('../Functions/UpdateBlogs');

(async function UpdateBlogsProcess() {
    console.info('Fetching blogs...');
    const blogs = await FetchBlogs();

    console.info('Updating blogs data...');
    await UpdateBlogs(blogs);

    console.info('Finished');

    setTimeout(UpdateBlogsProcess, config.processUpdateBlogsTimeout);
})();
