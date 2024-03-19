const mongoose = require('mongoose')
let libro

const connectDataBase = async () => {

    try{

        if (!libro) {
            libro = mongoose.model('libros',require ('../models/models.js').schema)         
        }
        await mongoose.connect('mongodb+srv://danielestebanjimenezlopez:jMVgHRtEX8rJ4yuB@data.vypajgk.mongodb.net/')
        .then(() => console.log('mongoose connection'))
        .catch((err) => console.log(err))
   
    }catch{
        console.log('mongondb connection error',error);
        process.exit(1);
    }


}

module.exports = connectDataBase