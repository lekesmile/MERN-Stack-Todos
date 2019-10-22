require('./database')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const todoroute = require('./routes/todoRoute')


// For server to fetch to communicate with other server i.e frontend
app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.use(todoroute)







port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`server is up and running @ ${port}`)
})