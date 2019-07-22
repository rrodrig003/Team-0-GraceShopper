const {
  models: { User },
} = require('../index');

module.exports = () =>
  User.create({ name: 'Roy' })
    .then(roy => {
      return roy;
    })
    .catch(e => {
      console.error('Error seeding Database.', e);
      throw new Error(e);
    });
