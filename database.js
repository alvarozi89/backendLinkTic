const mongoose = require('mongoose')

//URI = ('mongodb://localhost/bdVacunados')
URI =('mongodb+srv://sistemas2021:sistemas@cluster0.zsev0.mongodb.net/Vacunados?retryWrites=true&w=majority')

mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(db => console.log('base de datos conectada',db.connection.name))
    .catch(error => console.log(error))

module.exports = mongoose