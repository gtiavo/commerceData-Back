

module.exports =  ( sequelize, DataTypes ) => {

    const alias = 'Categorias';
  
    const col = {
        id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
        },
        nombre:{
          type: DataTypes.STRING(100),
        },
      
        code:{
          type: DataTypes.STRING(100),
          primaryKey: true,
          
        }
    };
    const config = {
      tableName: "categorias",
      timestamps: false,
    };
  
  const Categoria = sequelize.define( alias, col, config );


  Categoria.associate = function ( models ){
    Categoria.hasMany( models.Productos,{
      as:'producto',
      foreignKey: 'categoriaId'
    })

    Categoria.hasMany( models.SubCategorias,{
      as:'subCategories',
      foreignKey: 'categoriaId'
    })
  }
  
  return Categoria;

}