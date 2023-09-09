const assert = require("assert");
const Spacecraft = require("../index");

describe("Spacecraft", () => {
  describe(".checkSystems", () => {
    it("return true if all systems are working", () => {
      //setup
      const expected = true;
      // exercise
      const spacecraft = Spacecraft.checkSystems();
      // verify
      assert.ok(spacecraft == expected);
      // teardown optional
    });
  });
  describe(".timeOfTakeoff", () => {
    it("returns its argument as a string", () => {
      //setup
      const hour = 10;
      const expectedType = "string";
      // exercise
      const hourToString = Spacecraft.timeOfTakeoff(hour);
      // verify
      assert.strictEqual(typeof hourToString, expectedType);
      // teardown optional
    });
    it("throws an error if passed a number less than 0", () => {
      //setup
      const hour = -1;
      const expectedType = "string";
      // exercise and verify
      assert.throws(() => {
        Spacecraft.timeOfTakeoff(hour);
      }, RangeError);
      // teardown optional
    });
    it("throws an error if passed a number greater than 23", () => {
      //setup
      const hour = 24;
      // exercise and verify
      assert.throws(() => {
        Spacecraft.timeOfTakeoff(hour);
      }, RangeError);
      // teardown optional
    });
  });
});
