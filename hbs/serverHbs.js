const express = require('express');
const routerProducts = require('../routes/index.js')
const app = express();

const handlebars = require('express-handlebars');


app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })        
)
    
app.set('view engine', 'hbs');

app.set("views", "./views")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', routerProducts)


app.get('/', (req, res) => {
    res.render('main');
})


const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})