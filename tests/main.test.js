jest.useFakeTimers();
const Operators = require("rxjs");
const clock$ = require("../emitter");

describe("main", () => {
  it("calls necessary functions, logs correct data", () => {
    console.log = jest.fn();
    const pipeSpy = jest.spyOn(clock$, "pipe");
    const catchErrorSpy = jest.spyOn(Operators, "catchError");
    const mapSpy = jest.spyOn(Operators, "map");

    require("../main");
    expect(console.log).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(console.log).toHaveBeenNthCalledWith(1, "tick");
    expect(console.log).toHaveBeenNthCalledWith(2, "tock");
    expect(console.log).toHaveBeenNthCalledWith(3, "tick");
    expect(console.log).toHaveBeenNthCalledWith(4, "tock");
    expect(console.log).toHaveBeenNthCalledWith(5, "tick");
    expect(console.log).toHaveBeenNthCalledWith(6, "Explosion!");
    expect(console.log).toHaveBeenNthCalledWith(
      7,
      "Observer got a complete notification"
    );
    expect(pipeSpy).toHaveBeenCalled();
    expect(catchErrorSpy).toHaveBeenCalled();
    expect(mapSpy).toHaveBeenCalled();
  }, 1);
});
