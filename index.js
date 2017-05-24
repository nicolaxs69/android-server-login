'use strict';

const express    = require('express');        
const app        = express();                
const bodyParser = require('body-parser');
const logger 	   = require('morgan');
const router 	   = express.Router();
//const port 	   = process.env.PORT || 8080;
app.set('port', (process.env.PORT || 5000));


app.use(bodyParser.json());
app.use(logger('dev'));

require('./routes')(router);
app.use('/api/v1', router);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// app.listen(port);
//console.log(`App Runs on ${port}`);

//app.listen(process.env.PORT || 5000, function () {
  //console.log('Server running');
//})