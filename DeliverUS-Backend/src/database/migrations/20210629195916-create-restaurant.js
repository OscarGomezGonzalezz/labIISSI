
      module.exports = {
        up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('Restaurants', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            name: {
              type: Sequelize.STRING,
              allowNull: false
      
      
            },
            description:{
              allowNull: false,
              type: Sequelize.TEXT
      
            },
            address:{
              allowNull: false,
              type: Sequelize.STRING
      
            },
            postalCode:{
              allowNull: false,
              type: Sequelize.STRING
      
            },
            url:{
              allowNull: false,
              type: Sequelize.STRING
      
            },
            //foreign key
            restaurantCategoryId: {
              type: Sequelize.INTEGER,
              references: {
                model: {
                  tableName: 'RestaurantCategories'
                },
                key: 'id'
              }
            },
            shippingCosts:{
              allowNull: false,
              type: Sequelize.DOUBLE
      
            },
            email:{
              allowNull: false,
              type: Sequelize.STRING
      
            },
            logo:{
              
              type: Sequelize.STRING
      
            },
            heroImage:{
              
              type: Sequelize.STRING
      
            },
            phone:{
              allowNull: false,
              type: Sequelize.STRING
      
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: new Date()
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: new Date()
            },
            //foreign key
            userId:{
      
              type: Sequelize.INTEGER,
              references: {
                model: {
                  tableName: 'Users'
                },
                key: 'id'
              }
      
            },
            status:{
      
              allowNull: false,
              type: Sequelize.ENUM('online', 'offline', 'closed', 'temporaly closed')
      
      
      
            }
          })
        },
        down: async (queryInterface, Sequelize) => {
          await queryInterface.dropTable('Restaurants')
        }
      }
