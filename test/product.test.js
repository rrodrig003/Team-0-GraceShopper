const chai = require("chai");
const expect = chai.expect;
const db = require("../server/database/connection.js");
const Product = require("../server/database/models/products.js");

describe("The `Product` model", () => {
  /**
   * First we clear the database and recreate the tables before beginning a run
   */
  before(() => {
    return db.sync({ force: true });
  });

  /**
   * Next, we create an (un-saved!) article instance before every spec
   */
  const fullDescription =
    "This iphone charger will seamlessly charge your iphone in a very short amount of time. It has built in blue tooth that will know anyones socks off. Your friends and neighbors will be so impressed with your charger they will offer you free lemonade and a box off cookies. YOu can eat your cookies and lemonade in peace knowing your iphone will be fully charged the entire time. Cheers to you and your fully charged iphone mate!!";

  describe("attributes definition", () => {
    it("includes `name`, `price`, `description`, `quantity and `rating` fields", async () => {
      const savedProduct = await Product.create({
        name: "Charger",
        price: 10,
        rating: 4,
        description: fullDescription
      });
      expect(savedProduct.name).to.equal("Charger");
      expect(savedProduct.description).to.equal(fullDescription);
      expect(parseFloat(savedProduct.price)).to.equal(10.0);
      expect(savedProduct.quantity).to.equal(1);
      expect(savedProduct.rating).to.equal(4);
    });

    it("requires `name`", async () => {
      product.name = null;

      let result, error;
      try {
        result = await product.validate();
      } catch (err) {
        error = err;
      }

      if (result) throw Error("validation should fail when content is null");

      expect(error).to.be.an.instanceOf(Error);
    });

    beforeEach(() => {
      product = Product.create({
        name: "Charger",
        price: 10,
        rating: 4,
        description: fullDescription
      });
    });

    it("The description field can handle long `content`", async () => {
      const result = await Product.create({
        name: "Charger",
        price: 10,
        rating: 4,
        description: fullDescription
      });

      expect(result.description).to.equal(fullDescription);
    });
  });
});
