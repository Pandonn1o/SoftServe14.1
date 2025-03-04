jest.useFakeTimers();

const clock$ = require("../emitter");

describe("statistics", () => {
  it("returns correct data", (done) => {
    const expected = ["tick", "tick", "tick", "tick", "tick"];
    const actual = [];
    clock$.subscribe({
      next: (result) => {
        actual.push(result);
      },
      error: (error) => {
        expect(actual).toEqual(expected);
        expect(error).toEqual(Error("Explosion!"));
        done();
      },
    });
    jest.runAllTimers();
  });
});
