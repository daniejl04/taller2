const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routes/index.js');
const connectDataBase = require('./config/database.js')


connectDataBase()
const app = express();
port = 3000


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use('/', router)
 app.listen(port, ()=>{ console.log(`listening on port ${port}`)})