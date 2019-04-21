const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const domainRoutes = require('./routes/domain');
const domain = require('./models/domain');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));



app.get('/domains', function (req, res, next)  {
  domain.find()
    .then(domains=> {
      console.log(domains);
      res.send(domains);
      })
    .catch(err => {
      console.log(err);
    });
});

mongoose
  .connect(
    'mongodb://127.0.0.1:27017/dashboard', { useNewUrlParser: true }
  )
  .then(result => {
	console.log('server lsten at 4000');
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
});
