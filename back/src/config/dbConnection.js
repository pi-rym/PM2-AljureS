const mongoose = require('mongoose')

// const URI = 'mongodb+srv://saidsimon2:jN8orPcupjks9vZU@cluster0.ilsn2qj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const URI = 'mongodb+srv://saidsimon2:jN8orPcupjks9vZU@cluster0.ilsn2qj.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0'

module.exports = {
    dbConnection:  async ()=>{
        await mongoose.connect(URI)
    }
}

