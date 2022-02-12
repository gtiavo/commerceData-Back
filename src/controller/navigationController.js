
const { response } = require('express');

const { Productos }  = require('../database/models');

const { ProductModel } = require('../model');

const { validationResult } = require('express-validator')

const navigationController ={
 

    getProducts : async( req, res = response , next ) => {
        try {

          const products = await Productos.findAll({
              include: [{ association: 'categoria' }, { association: 'subCategorias' }]
          })
       
            res.status(200).json({
                ok: true,
                products:products
            })
            
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'No se pudo completar la accion ' + error
            })
        }
        
    },
    
    oneProduct : async ( req, res = response) => {
            try {
               const id = req.params.id 
            const products = await Productos.findByPk(id)
         
            res.status(200).json({
                ok: true,
                products:products
            })
                
            } catch (error) {
                console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'No se pudo completar la accion ' + error
            })
        }
        
        },


    newProduct: async ( req, res = response,) => {
        try {
            const err = validationResult(req);
            if(err.isEmpty()){
                await ProductModel.create( req.body )
                 res.status(200).json({
                     ok:true,
                     msg: 'se creo el producto'
                 })
            }else{
                res.status(400).json({
                    ok:false,
                    error: err.mapped()
                })
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'No se pudo completar la accion ' + error
            })
        }
    },
    updateProduct: async ( req, res= response) => {
        try {
            const id = req.params.id

           await ProductModel.upDate( req.body, id );
            
            res.status(200).json({
                ok:true,
                msg: 'se modifico el producto'
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'No se pudo completar la accion ' + error
            })
        }
    },

    deleteProduct : async ( req, res= response) => {
        try {
            const id = req.params.id
            await ProductModel.delete( id );

          res.status(200).json({
              ok: true,
              msg: 'se eleimino el producto'
          })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'No se pudo completar la accion ' + error
            })
        }
    }
}

module.exports =navigationController