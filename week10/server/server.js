const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/submit-form/', postHandler);
app.post('/submit-ajax/', postHandler);

function postHandler(req, res) {
    console.log(req.body);
    if (req.body.firstName && req.body.lastName && req.body.email) {
        res.json(req.body)
    } else {
        res.status(500).send({ error: "boo:(" });
    }
}

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});