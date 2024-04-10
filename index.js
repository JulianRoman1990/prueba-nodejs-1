const express = require('express');
const connectDatabase = require('./src/config/database');
const bodyParser = require('body-parser');
const routerClients = require('./src/routes/routeClientes');
const routerBooks = require('./src/routes/routeLibros')

const app = express();
const port = 3009;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routerClients);
app.use('/', routerBooks);

connectDatabase();

app.get('/', (req, res) => {
    res.send('welcome to the app');
}),

app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
});
