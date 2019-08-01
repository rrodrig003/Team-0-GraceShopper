const faker = require('faker');


const getMockProduct = () => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: 'This iphone charger will seamlessly charge your iphone in a very short amount of time. It has built in blue tooth that will know anyones socks off. Your friends and neighbors will be so impressed with your charger they will offer you free lemonade and a box off cookies. YOu can eat your cookies and lemonade in peace knowing your iphone will be fully charged the entire time. Cheers to you and your fully charged iphone mate!!',
  stock: 23,
});

const getMockCategory = () => ({
  name: faker.commerce.department(),
});

const getMockUser = () => ({
  username: faker.internet.userName(),
  password: 'testPw',
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  country: faker.address.countryCode(),
  city: faker.address.city(),
  postalCode: 10010,
  street: faker.address.streetAddress(),
});

module.exports = {
  getMockProduct,
  getMockUser,
  getMockCategory,
};
