const express = require('express')
const app = express()
const port = 2007
const bodyParser = require('body-parser')
const path = require('path');
const Response = require('./response')
const dataPath = path.join(__dirname, 'data.js');
const ApiKey = 'oeBxM7xJCh65BFCftZF6S6AEJ/fAQ9IEVBWIM6ScR2F1h6MbfAKCSv/xRNxeAKt/A7iThuK34WY9s3m0hdm7wQ=='
app.use(bodyParser.json())


app.get('/', (req, res) => {
    if (req.query.ApiKey === ApiKey) {
        res.sendFile(dataPath, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Gagal mengirim file data.json');
            } else {
                console.log('File data.json berhasil dikirim');
            }
        });
    }else{
        Response(401 , 'ApiKey Not Found' , 'Unauthorized' , res)
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})