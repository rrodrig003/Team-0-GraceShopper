const chai = require("chai");
const expect = chai.expect;
const db = require("../server/database/connection.js");
const User = require("../server/database/models/user");
const Session = require("../server/database/models/session");
const crypto = require('crypto')

describe('Users and Sessions' , () => {

  before(() => {
    return db.sync({force: true})
  });
  describe('User Model', () => {

    it('Able to create a user with correct fields',  async () => {
      //update w/ security feature
      const testUser = await User.create({
        username: 'testUser',
        password: 'testpw',
        firstName: 'test',
        lastName: 'user',
        email: 'test@test.com'
      });
  
      expect(testUser.username).to.equal('testUser');
      expect(testUser.password).to.equal('testpw');
      expect(testUser.firstName).to.equal('test');
      expect(testUser.lastName).to.equal('user');
      expect(testUser.email).to.equal('test@test.com');
      expect(testUser.isAdmin).to.equal(false);
    });
  });

  describe('Session model', () => {
    
    it('able to create a session', async () => {
      const testSid = crypto.randomBytes(16).toString('hex')
      const testSession = await Session.create({
        SID: testSid
      });
      expect(testSession.SID).to.equal(testSid);
    });
  });

});
