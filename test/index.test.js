const assert = require("chai").assert;
const app = require("../index");

// Results
const sayHelloResult = app.sayHello();
const addNumbersResult = app.addNumbers(5, 5);

describe("app", () => {
  describe("sayHello", () => {
    it("should return hello", () => {
      assert.equal(sayHelloResult, "hello");
    });
    it("should return a string", () => {
      assert.typeOf(sayHelloResult, "string");
    });
  });
  describe("addNumbers", () => {
    it("addNumbers should return a result greater than 5", () => {
      assert.isAbove(addNumbersResult, 5);
    });
    it("addNumbers should return a number", () => {
      assert.typeOf(addNumbersResult, "number");
    });
  });
});
