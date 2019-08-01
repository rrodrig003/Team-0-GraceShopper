const crypto = require('crypto');
const config = require('./seedConfig');
const mock = require('../test/utils');
const models = require('../server/database/models');

const seedData = ['Product', 'User', 'Category'];

const createSession = async () => {
  const session = await models.Session.create({
    SID: crypto.randomBytes(16).toString('hex'),
  }).catch(e => console.error(e));
  return session;
};

const runMock = (instances, table) => {
  const getMockData = mock[`getMock${table}`];
  const model = models[table];
  return () => {
    let created = 0;
    while (created < instances) {
      const instance = getMockData();
      created += 1;
      model.create(instance).catch(e => console.error(e));
    }
  };
};

seedData.map((table) => {
  const count = config[`SEED_${table.toUpperCase()}`];
  return runMock(count, table)();
});

for (let session = 0; session < config.SEED_SESSION; session += 1) {
  createSession();
}

const seedOrders = async () => {
  const idx = Math.floor(Math.random() * 5);
  const product = await models.Product.create(mock.getMockProduct());
  const session = await createSession();
  const order = await models.Order.create({
    status: ['Cart', 'Purchased', 'Shipped', 'Delivered', 'Returned'][idx],
    sessionId: session.id,
  });
  await models.OrderItem.create({
    productId: product.id,
    orderId: order.id,
  });
};

for (let orders = 0; orders < config.SEED_ORDER; orders += 1) {
  seedOrders();
}
