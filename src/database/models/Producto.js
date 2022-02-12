

module.exports =  ( sequelize, DataTypes ) => {

  const alias = 'Productos';

  const col = {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre:{
        type: DataTypes.STRING(100),
      },
      precio:{
        type: DataTypes.DECIMAL
      },
      cantidad:{
        type: DataTypes.INTEGER
      },
      categoriaId:{
        type: DataTypes.STRING(100),
        foreignKey:true
      },
      subcategoria:{
        type: DataTypes.STRING(100),
        foreignKey:true
      }
  };
  const config = {
    tableName: "productos",
    timestamps: false,
  };

const Producto = sequelize.define( alias, col, config );


Producto.associate = function ( models ) {
  Producto.belongsTo( models.Categorias,{
    as:'categoria',
    foreignKey: 'categoriaId'
  })

  Producto.belongsTo( models.SubCategorias,{
    as:'subCategorias',
    foreignKey: 'subcategoria'
  })
}



return Producto;

} 