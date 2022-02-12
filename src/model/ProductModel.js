const { Productos } = require('../database/models');

const ProductModel = {

    create: async ( user ) =>{
        try {
            
      return  await Productos.create({
            ...user
        })
            
        } catch (error) {
            console.log(error);
        }
    },
    
    upDate: async( user, idUser ) => {
        try {

        return await Productos.update({
            ...user,
        },
        {
            where:{
                id: idUser
            }
        })
            
        } catch (error) {
            console.log(error);
        }
    },

    delete: async ( idUser) => {
        try {
         return await Productos.destroy({
             where:{
                 id: idUser
             }
         })
        } catch (error) {
            console.log(error);
        }
    }


}


module.exports = ProductModel;