const User = require('./User');
const Project = require('./Project');
// const Comment = require('./Comment')

User.hasMany(Project, {
  foreignKey: 'user_id'
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
});

// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id'
// });

// Project.hasMany(Comment, {
//   foreignKey: 'post_id'
// });

module.exports = { User, Project };