const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

mongoose.connect('mongodb://localhost:27017/devradar', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

const app = express()
const port = 3000

app.use(express.json())
app.use(routes)

app.listen(port, () =>{
    console.log(`Servidor executando na porta ${port}`)
})