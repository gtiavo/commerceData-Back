const { SubCategorias } = require('../database/models');

const SubCategoriasModels = {

    create: async ( item ) =>{
        try {
            
      return  await SubCategorias.create({
            ...item
        })
            
        } catch (error) {
            console.log(error);
        }
    },
    
    upDate: async( item, idItem ) => {
        try {

        return await SubCategorias.update({
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
         return await SubCategorias.destroy({
             where:{
                 id: idItem
             }
         })
        } catch (error) {
            console.log(error);
        }
    }


}


module.exports = SubCategoriasModels;