const express = require('express');
const db = require('./db')
const config = require('./config')

db( config.DB_URL )
const app = express()
app.use(express.json());

app.use(require('./routes/index.js'))

app.listen(3000);
console.log('Server listen on Port: ', 3000)