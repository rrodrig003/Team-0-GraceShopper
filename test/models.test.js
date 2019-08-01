const chai = require('chai');

const { expect } = chai;
const models = require('../server/database/models');
const mock = require('./utils');

describe('Test Models', () => {
  before(() => models.connection.sync({ force: true }));

  after(() => {
    models.connection.close();
  });

  describe('Session', () => {
    it('Able to create a session', async () => {
      const session = await models.Session.create({
        SID: 'Test Session',
      });

      expect(session.SID).to.equal('Test Session');
    });

    it('Valid SID is required', async () => {
      let pass;

      try {
        await models.Session.create();
      } catch (e) {
        pass = e;
      }
      expect(pass).to.be.an.instanceOf(Error);

      try {
        await models.Session.create({
          SID: '',
        });
      } catch (e) {
        pass = e;
      }
      expect(pass).to.be.an.instanceOf(Error);
    });
  });

  describe('Product', () => {
    it('Able to create a product with long description', async () => {
      const product = mock.getMockProduct();
      const testInstance = await models.Product.create(product);

      expect(testInstance.name).to.equal(product.name);
      expect(testInstance.price).to.equal(product.price);
      expect(testInstance.description).to.equal(product.description);
      expect(testInstance.stock).to.equal(product.stock);
    });

    it('requires name and price', async () => {
      let product = mock.getMockProduct();
      delete product.price;
      let pass;
      try {
        await models.Product.create(product);
      } catch (e) {
        pass = e;
      }
      expect(pass).to.be.an.instanceOf(Error);

      product = mock.getMockProduct();
      delete product.name;

      try {
        await models.Product.create(product);
      } catch (e) {
        pass = e;
      }
      expect(pass).to.be.an.instanceOf(Error);
    });
  });

  describe('Category', () => {
    it('able to create a category', async () => {
      const category = mock.getMockCategory();
      const testInstance = await models.Category.create(category);
      expect(testInstance.name).to.equal(category.name);
    });

    it('Products can have a category', async () => {
      const category = mock.getMockCategory();
      const product = mock.getMockProduct();
      let testProduct;
      let testCategory;
      try {
        testProduct = await models.Product.create(product);
      } catch (e) {
        console.error('Failed to create a product', e);
      }

      try {
        testCategory = await models.Category.create(category);
      } catch (e) {
        console.error('Failed to create category', e);
      }

      testProduct.setCategory(testCategory.id);

      expect(testProduct.categoryId).to.equal(testCategory.id);
    });
  });

  describe('Rating', () => {
    it('Able to create a rating', async () => {
      const rating = Math.floor(Math.random() * 5);

      const testInstance = await models.Rating.create({ rating });
      expect(testInstance.rating).to.equal(rating);
    });

    it('Has a max value of 5 and min value of 0', async () => {
      const failNegative = -5;
      const failExceed = 100;
      let pass;
      try {
        await models.Rating.create({ rating: failNegative });
      } catch (e) {
        pass = e;
      }

      expect(pass).to.be.an.instanceOf(Error);

      try {
        await models.Rating.create({ rating: failExceed });
      } catch (e) {
        pass = e;
      }

      expect(pass).to.be.an.instanceOf(Error);
    });
  });

  describe('User', () => {
    it('Able to create a user', async () => {
      const user = mock.getMockUser();
      const testInstance = await models.User.create(user);

      expect(testInstance.username).to.equal(user.username);
      expect(testInstance.firstName).to.equal(user.firstName);
      expect(testInstance.lastName).to.equal(user.lastName);
      expect(testInstance.country).to.equal(user.country);
      expect(testInstance.usstate).to.equal(user.usstate);
      expect(testInstance.postalCode).to.equal(user.postalCode);
      expect(testInstance.street).to.equal(user.street);
      expect(testInstance.email).to.equal(user.email);
      expect(testInstance.isAdmin).to.equal(false);
    });
  });

  describe('Order', async () => {
    it('has a sessionId and fulfillment status', async () => {
      const order = await models.Order.create({ status: 'Cart', sessionId: 1 });
      expect(order.sessionId).to.equal(1);
      expect(order.status).to.equal('Cart');
    });

    it('has invoice statuses', async () => {
      const order = await models.Order.create({
        status: 'Purchased',
        sessionId: 1,
      });
      expect(order.status).to.equal('Purchased');
      await order.update({ status: 'Shipped' });
      expect(order.status).to.equal('Shipped');
      await order.update({ status: 'Delivered' });
      expect(order.status).to.equal('Delivered');
    });
  });

  describe('Order Item', async () => {
    it('has a product id, and quantity fields', async () => {
      const orderItem = await models.OrderItem.create({
        productId: 1,
        orderId: 1,
      });

      expect(orderItem.productId).to.equal(1);
      expect(orderItem.orderId).to.equal(1);
    });
  });
});
