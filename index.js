require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())


const Todo = require('./models/Todo')

//leitura de JSON / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rotas da api
const todoRoutes = require('./routes/todoRoutes')

app.use('/todo', todoRoutes)

//rota inicial / endpoint
app.get('/', (req, res) => {

    res.json({
        message: 'Oi Express!'
    })

})

//entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apitodo.nz7va.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectamos ao MongoDB')
        app.listen(8080)
    })
    .catch((err) => console.log(err))

