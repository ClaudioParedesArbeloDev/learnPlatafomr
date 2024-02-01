import express from 'express'
import handlebars from 'express-handlebars'


const app = express()

app.use(express.json())
app.use(express.static('./src/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/sobremi', (req, res) => {
    res.render('sobremi')
})
app.get('/cursos', (req, res) => {
    res.render('cursos')
})



app.listen(8080)