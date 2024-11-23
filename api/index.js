const express = require('express');
const cors = require('cors');
const secure = require('ssl-express-www');
const { color } = require('../lib/color');

const mainrouter = require('../routes/main');
const apirouter = require('../routes/api');

const app = express();

app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());
app.use(secure());
app.use(express.static('public'));

// Routing
app.use('/', mainrouter);
app.use('/api', apirouter);

module.exports = app
