const express = require('express');
const routes = require('./router/router');

require('./db/mongoDB')

const app = express();

app.use(express.json());

app.use('/api',routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
