var history = require('connect-history-api-fallback');

const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 5000;
app.listen(port);
//console.log('server started ' + port);