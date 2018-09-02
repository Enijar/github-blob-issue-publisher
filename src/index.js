const FetchBlogs = require('./Commands/FetchBlogs');
const CreateOrUpdateBlogs = require('./Commands/CreateOrUpdateBlogs');
const GeneratePagesFromBlogs = require('./Commands/GeneratePagesFromBlogs');

(async () => {
    try {
        const blogs = await FetchBlogs();
        await CreateOrUpdateBlogs(blogs);
        await GeneratePagesFromBlogs();
    } catch (err) {
        console.error(err);
    }
})();
