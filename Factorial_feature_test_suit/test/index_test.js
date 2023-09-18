var assert = require("assert");
var Calculate = require("../index.js");
var expect = require("chai").expect;

describe("Calculate", () => {
  describe(".factorial", () => {
    it("check factorial number", () => {
      //setup
      const exerciseValue = 6;
      const factorialToCheck = 3;
      //exercise
      const factorialReturned = Calculate.factorial(factorialToCheck);
      //verify
      assert.equal(factorialReturned, exerciseValue);
    });
    it("check factorial negative number", () => {
      //setup
      const exerciseValue = -6;
      const factorialToCheck = -3;
      //exercise
      const factorialReturned = Calculate.factorial(factorialToCheck);
      //verify
      assert.equal(factorialReturned, exerciseValue);
    });
    it("check factorial number zero", () => {
      //setup
      const exerciseValue = 1;
      const factorialToCheck = 0;
      //exercise
      const factorialReturned = Calculate.factorial(factorialToCheck);
      //verify
      assert.equal(factorialReturned, exerciseValue);
    });
    it("check factorial not a number", () => {
      const factorialToCheck = "A";
      // Exercise and Verify
      expect(() => {
        Calculate.factorial(factorialToCheck);
      }).to.throw(
        Error,
        "An error occurred. The provided data is not a number."
      );
    });
  });
});
