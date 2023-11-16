const express = require('express');
const cors = require('cors');
const shortenRoute = require('./router/shorten');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/shorten-url', shortenRoute);

app.listen(3001, () => {
    console.log('Server up and running');
});