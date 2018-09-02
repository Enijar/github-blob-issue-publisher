module.exports = (req, res) => {
    res.status(404);
    res.write('404 Page Not Found');
    res.end();
};
