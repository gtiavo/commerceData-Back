const { Categorias } = require('../database/models');

const CategoriasModels = {

    create: async ( item ) =>{
        try {
            
      return  await Categorias.create({
            ...item
        })
            
        } catch (error) {
            console.log(error);
        }
    },
    
    upDate: async( item, idItem ) => {
        try {

        return await Categorias.update({
            ...item,
        },
        {
            where:{
                id: idItem
            }
        })
            
        } catch (error) {
            console.log(error);
        }
    },

    delete: async ( idItem) => {
        try {
         return await Categorias.destroy({
             where:{
                 id: idItem
             }
         })
        } catch (error) {
            console.log(error);
        }
    }


}


module.exports = CategoriasModels;