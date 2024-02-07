import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import __dirname from './utils.js'
import indexRouter from './routes/index.router.js'



const app = express()

app.use(express.json())
app.use('/', express.static('./src/public'))

app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', indexRouter)

app.get('/sobremi', (req, res) => {
    res.render('sobremi')
})
app.get('/cursos', (req, res) => {
    res.render('cursos')
})
app.get('/contacto', (req, res) => {
    res.render('contacto')
})
app.get('/registro', (req, res) => {
    res.render('registro')
})


app.listen(8080)