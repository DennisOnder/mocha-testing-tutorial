const assert = require("chai").assert;
const app = require("../index");

describe("app", () => {
  it("should return hello", () => {
    assert.equal(app(), "hello");
  });
});
