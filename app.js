const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
let urls = []

app.get('/', (req, res) => {
    res.send('Nodejs training project - url cutter by abo backend')
})

app.get('/tinyurl', (req, res) => {
    res.send('tinyurl get')
})

app.post('/tinyurl', (req, res) => {
    let link = req.query.link
    let name = req.query.name
    console.log('link = ' + link)
    console.log('name = ' + name)
    urls.push('/' + name)
    app.get('/' + name, (req, res) => {
        res.redirect(link)
    })
    res.send(urls)
})

app.listen(8000);
console.log('Server listening on ' + "http://" + '127.0.0.1' + ':' + '8000');
