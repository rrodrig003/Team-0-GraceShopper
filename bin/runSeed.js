require('dotenv').config();
const mock = require('../test/utils');
const models = require('../server/database/models');
const crypto = require('crypto');
const seedData = ['Product', 'User', 'Category'];

const createSession = async () => {
  const session = await models.Session.create({
    SID: crypto.randomBytes(16).toString('hex')
  }).catch(e => console.error(e));
  return session;
};

const runMock = (instances, table)  => {
  let getMockData = mock[`getMock${table}`];
  let model = models[table];
  return async () => {
    let created = 0;
    while(created < instances) {
      let instance = getMockData();
      created+=1;
      await model.create(instance).catch(e => console.error(e));
    }
  };
};

for(let table of seedData) {
  let count = process.env[`SEED_${table.toUpperCase()}`];
  runMock(count, table)();
};

for(let session = 0; session < process.env.SEED_SESSION; session++) {
  createSession();
};

const seedOrders = async() => {
  const idx = Math.floor(Math.random() * 5);
  const product = await models.Product.create(mock.getMockProduct());
  const session = await createSession();
  const order = await models.Order.create({
    status: ['Cart', 'Purchased', 'Shipped', 'Delivered', 'Returned'][idx],
    sessionId: session.id,
  });
  await models.OrderItem.create({
    productId: product.id,
    orderId: order.id
  });
};

for(let orders = 0; orders < process.env.SEED_ORDER; orders++) {
  seedOrders();
};
