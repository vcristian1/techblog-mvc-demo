const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'project',
              key: 'id',
            },
          },
    },
    {
        sequelize,
    }
);
  
  module.exports = Comment;