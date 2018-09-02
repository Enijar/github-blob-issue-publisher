const express = require('express');
const config = require('./config');
const routes = require('./routes');
const app = express();

app.use(express.static(config.publicPath));

routes(app);

app.listen(config.port, () => console.log(`Running app on port ${config.port}`));
