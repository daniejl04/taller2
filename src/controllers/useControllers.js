const libro = require('../models/models.js');

const controllers = {

    getlibros: async (res, req) =>{

        try{
            const libros = await libro.find()
            res.json(libros)
        }catch{
            console.log('no se encontraron libros')
        }
    }



}


module.exports = controllers