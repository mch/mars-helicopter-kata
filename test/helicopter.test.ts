import { expect } from "chai";
import { Helicopter } from "../src/helicopter";

// The helicopter starts at the origin, (0,0)
// If command is move forward, helicoptor moves in positive y direction
// If command is move backward, helicoptor moves in negative y direction
// If command is move left, helicoptor moves in negative x direction
// If command is move right, helicoptor moves in positive x direction

describe("mars helicopter", () => {
  it("starts at the origin", () => {
    const h = new Helicopter();
    expect(h.???).is.eql(0);
  });
});
