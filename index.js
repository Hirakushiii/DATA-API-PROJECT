const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const Data = require('./data')
const Response = require('./response')
const ApiKey = 'oeBxM7xJCh65BFCftZF6S6AEJ/fAQ9IEVBWIM6ScR2F1h6MbfAKCSv/xRNxeAKt/A7iThuK34WY9s3m0hdm7wQ=='
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
});

app.get('/', (req, res) => {
    if (req.query.ApiKey === ApiKey) {
        Data(res);
    }else{
        Response(401 , 'ApiKey Is Not Found' , 'Unauthorized' , res)
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})