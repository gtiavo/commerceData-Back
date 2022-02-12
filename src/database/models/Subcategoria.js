

module.exports =  ( sequelize, DataTypes ) => {

    const alias = 'SubCategorias';
  
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
          
        },
        categoriaId:{
            type: DataTypes.STRING(100),
            foreignKey:true
          },

    };
    const config = {
      tableName: "subcategorias",
      timestamps: false,
    };
  
  const SubCategoria = sequelize.define( alias, col, config );


  SubCategoria.associate = function ( models ){
    SubCategoria.hasMany( models.Productos,{
      as:'producto',
      foreignKey: 'subcategoria'
    })

    SubCategoria.belongsTo( models.Categorias,{
      as:'categories',
      foreignKey: 'categoriaId'
    })
  }
  
  return SubCategoria;

}