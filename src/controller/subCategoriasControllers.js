const { response } = require('express');
const { SubCategorias } = require('../database/models');
const { SubCategoriasModels } = require('../model');

const subCategoriasControllers = {

    getSubCategorias: async ( req, res = response ) => {
            try {

               const subcate = await SubCategorias.findAll({
                include: [{ association: 'producto' }, { association: 'categories' }]
                })

                res.status(200).json({
                    ok:true,
                    subcate
                })
                
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'no se pudo completar la solicitud, error: ' + error
                })
            }
    },
    newSubCategory: async (req, res = response ) => {
        try {

            await SubCategoriasModels.create( req.body )

            res.status(200).json({
                ok: true,
                msg: 'se creo la subcategoria en db'
            })
            
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'no se pudo completar la solicitud, error: ' + error
            })
        }
    },

    editSubCategory: async ( req = request, res = response ) => {
        try {
            const id = req.params.id

            await SubCategoriasModels.upDate(  req.body, id  )

            res.status(200).json({
                ok: true,
                msg: 'se edito la subcategoria en db'
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'no se pudo completar la solicitud, error: ' + error
            })
        }
    },

        deleteSubCategory : async ( req = request, res = response ) => {
            try {

                const id = req.params.id

                await SubCategoriasModels.delete(  id  )
    
                res.status(200).json({
                    ok: true,
                    msg: 'se elimino la subcategoria en db'
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

module.exports = subCategoriasControllers;