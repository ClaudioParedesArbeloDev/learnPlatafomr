import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import __dirname from './utils.js'

import indexRouter from './routes/index.router.js'
import sobremiRouter from './routes/sobremi.router.js'
import cursosRouter from './routes/cursos.router.js'
import contactoRouter from './routes/contacto.router.js'
import registroRouter from './routes/registro.router.js'


const app = express()

app.use(express.json())
app.use('/', express.static('./src/public'))

app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', indexRouter)

app.use('/sobremi', sobremiRouter)

app.use('/cursos', cursosRouter)

app.use('/contacto', contactoRouter)

app.use('/registro', registroRouter)

const URL = "mongodb+srv://claudioparedes:Cabeza2$@cluster1.rimje8x.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(URL, {
    dbName: 'registro2024'
})
    .then(() =>{
        console.log('DB connected!!!')
        app.listen(8080)
    })
    .catch(e => {
        console.log("Can't connect to DB")
    })