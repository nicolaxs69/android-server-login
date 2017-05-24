'use strict';

const express    = require('express');        
const app        = express();                
const bodyParser = require('body-parser');
const logger 	   = require('morgan');
const router 	   = express.Router();
//const port 	   = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(logger('dev'));

require('./routes')(router);
app.use('/api/v1', router);

// app.listen(port);

app.listen(process.env.PORT || 8080, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});

//console.log(`App Runs on ${port}`);