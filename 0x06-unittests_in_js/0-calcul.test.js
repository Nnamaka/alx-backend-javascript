const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const res = calculateNumber(1, 2);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(4.3, 24.7);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(6.3, 8.3);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(0, 0);
      assert.strictEqual(res, 0);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(-2.8, -1.3);
      assert.strictEqual(res, -4);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(-5.8, -9.4);
	assert.strictEqual(res, -2);
    });
});