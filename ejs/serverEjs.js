const express = require('express');
const routerProducts = require('../routes/index.js')

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/* app.set("views", "./views") */
app.set('view engine', 'ejs');

app.use('/', routerProducts)

app.get('/', (req, res) => {
    res.render('form');
})


const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})