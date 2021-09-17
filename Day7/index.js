const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.status(200).send("Hello");
});

app.get('/products', (req, res) => {
    res.send(req.query);
});

app.get('/user/:userId/books/:bookId', (req, res) => {
    console.log(req.query);
    res.send(req.params.userId);
})

app.listen(5000);