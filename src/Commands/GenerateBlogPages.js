const FetchBlogs = require('../Functions/FetchBlogs');
const CreateOrUpdateBlogs = require('../Functions/CreateOrUpdateBlogs');
const GeneratePagesFromBlogs = require('../Functions/GeneratePagesFromBlogs');

(async () => {
    try {
        console.info('Fetching blogs...');
        const blogs = await FetchBlogs();

        console.info('Saving blogs data...');
        await CreateOrUpdateBlogs(blogs);

        console.info('Generating blog pages...');
        await GeneratePagesFromBlogs();

        console.info('Finished');
    } catch (err) {
        console.error(err);
    }
})();
