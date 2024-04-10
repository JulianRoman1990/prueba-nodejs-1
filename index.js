const express = require('express');
const connectDatabase = require('./src/config/database');
const bodyParser = require('body-parser');
const routerClientes = require('./src/routes/routeClientes');
const routerLibros = require('./src/routes/routeLibros')



const app = express();
const port = 3008;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/', routerClientes);
app.use('/', routerLibros);

connectDatabase();


app.get('/', (req, res) => {
    res.send('welcome to the app');
}),

app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
});
