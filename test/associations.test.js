const chai = require("chai");
const expect = chai.expect;
const db = require("../server/database/connection.js");
const models = require("../server/database/models");
const crypto = require('crypto');

describe('Model Associations', () => {

  before(() => {
    return db.sync({ force: true })
  });

  describe('User Session Association', () => {

    it('session should be able to have a user id ', async () => {
      const testSID = crypto.randomBytes(16).toString('hex');
      const testSession = await models.Session.create({
        SID: testSID
      });

      expect(testSession.userId).to.equal(null);
    });
  });

});
