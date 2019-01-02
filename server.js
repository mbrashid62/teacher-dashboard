const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon('exam-facade' + '/build/favicon.ico'));
// the exam-facade is the current directory from where the script is running
app.use(express.static('exam-facade'));
app.use(express.static(path.join('exam-facade', 'build')));
app.get('/ping', function(req, res) {
  return res.send('pong');
});
app.get('/', function(req, res) {
  res.sendFile(path.join('exam-facade', 'build', 'index.html'));
});
app.listen(port);
