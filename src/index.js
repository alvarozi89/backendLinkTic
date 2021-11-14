//requiremos las dependencias necesarias
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')


//Configuramos para escuchar el puerto

app.set('Port', 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

app.use('/ciudad', require('./routes/Ciudad.routes'))
app.use('/persona', require('./routes/Personas.routes'))

//prueba para escuchar el puerto

app.listen(app.get('Port'), () => {
    console.log('Servidor escuchando por el puertooo :', app.get('Port'))
})