'use strict';

const app = require('./servers/server');
const port = 8000;

app.listen(port, () => console.log(`listening on port ${port}`));

/*
const express = require('express');
const app = express();
app.listen(8000, ()=>{ console.log('listening on 8000') }) */
