const {  request ,response } = require('express');
const { Categorias } = require('../database/models');
const { CategoriasModels } = require('../model');

const categoriasControllers = {

getCategory : async ( req, res = response ) => {

    try {

        const allCategory = await Categorias.findAll({
            include: [{ association: 'producto' }, { association: 'subCategories' }]
        })
        res.status(200).json({
            ok:true,
            allCategory
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'no se pudo completar la solicitud, error: ' + error
        })
    }
},

   
    oneCategory : async ( req, res = response) => {
            try {
               const id = req.params.id 
            const category = await Categorias.findByPk(id)

            console.log(category);
         
            res.status(200).json({
                ok: true,
                categoria:category
            })
                
            } catch (error) {
                console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'No se pudo completar la accion ' + error
            })
        }
        
        },

    newCategory: async (req, res = response ) => {
        try {

            await CategoriasModels.create( req.body )

            res.status(200).json({
                ok: true,
                msg: 'se creo la categoria en db'
            })
            
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'no se pudo completar la solicitud, error: ' + error
            })
        }
    },

    editCategory: async ( req = request, res = response ) => {
        try {
            const id = req.params.id

            await CategoriasModels.upDate(  req.body, id  )

            res.status(200).json({
                ok: true,
                msg: 'se edito la categoria en db'
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'no se pudo completar la solicitud, error: ' + error
            })
        }
    },

        deleteCategory : async ( req = request, res = response ) => {
            try {

                const id = req.params.id

                await CategoriasModels.delete(  id  )
    
                res.status(200).json({
                    ok: true,
                    msg: 'se elimino la categoria en db'
                })
                
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'no se pudo completar la solicitud, error: ' + error
                })
            }
        }

}

module.exports = categoriasControllers;