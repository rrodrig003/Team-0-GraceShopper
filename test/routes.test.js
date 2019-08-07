const request = require('supertest');
const chai = require('chai');
const app = require('../server/main.js');
const { getMockUser } = require('./utils');

const agent = request.agent(app);
const { expect } = chai;

describe('Routes', () => {
  describe('Registration', () => {
    it('Should be able to successfully create a user', async () => {
      const user = getMockUser();
      const res = await agent
        .post('/api/auth/register')
        .send(user)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body.username).to.equal(user.username);
      expect(res.body.email).to.equal(user.email);
    });
  });
});
