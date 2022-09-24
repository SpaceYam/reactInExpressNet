const express = require('express');
const app = express(), port = 8888; 
const router = express.Router();
const path = require('path');

let etcviews = path.join(__dirname, '../clients/etcviews');
//app.listen(port, () => console.log(`listening on port ${port}`));

router.get('/', (req, res) => {
  res.sendFile(path.join(etcviews, 'index.html'));
});

router.get('/a', (req, res) => {
    res.json(path.join(etcviews, 'index.html'));
});

//for non routes. needs to be a last route 
router.get('*', (req, res)=>{
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>page not found!</h1>');
    res.end();
}); 

require('dotenv').config(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
if(process.env.IS_DEV) app.use('/', router); 
else app.use('/.netlify/functions/server', router);  // path must route to lambda (express/server.js)

const serverless = require('serverless-http');
module.exports = app;
module.exports.handler = serverless(app); 