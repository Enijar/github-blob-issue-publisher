const express = require('express');
const config = require('./config');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || config.port;

app.use(express.static(config.publicPath));

routes(app);

app.listen(port, () => console.log(`Running app on port ${port}`));
