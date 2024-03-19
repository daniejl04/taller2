const libro = require('../models/models.js');

const controllers = {

    getlibros: async (req, res) =>{

        try{
            const libros = await libro.find()
            res.json(libros)
        }catch{
            console.log('no se encontraron libros')
        }
    },

    createlibros: async (req, res) =>{

        const newlibro = req.body
        try{
            const libros =  new libro(newlibro)
            const libroSave = await libros.save()

            res.status(201).json(libroSave)
        }catch{
            console.log('no se puede crear el libro')
        }
     

    }
}

module.exports = controllers