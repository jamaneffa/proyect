//implementacion del framework
const express = require('express')
const app = express()

//configuracion del metodo listen para levantar el proyecto en un puerto determinado
const port = process.env.PORT || 2020	
const start = () => console.log (`Starting Server in port ${port}`)
app.listen(port, start())

//configuracion para el uso de arhivos estaticos
const {resolve} = require('path')
app.use(express.static(resolve(__dirname ,'..', 'assets')))

//configuracion de EJS
app.set('view engine','ejs')
app.set('views', resolve(__dirname, 'views'));

//configuracion de urlencoded para leer informacion del req.body y el req.file
app.use(express.urlencoded({ extended:false}))

//configuracion para leer archivos json
app.use(express.json())

//configuracion de method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//configuracion de express-session
const session = require('express-session')
app.use(session({
    secret:'express-users',
    resave: false,
    saveUninitialized: true
}))

//configuracion de cookie-parser
const cookies = require('cookie-parser')
app.use(cookies())

//definciion de archivo de ruteo


app.use('/', require('./routes/mainRoute'))
app.use('/products', require('./routes/productRoutes'))
app.use('/users', require('./routes/userRoutes'))

//vista para paginas no encontradas
app.use((req,res,next) => {
    res.status(404).render('main/notFound');
})
    