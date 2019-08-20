import { setError, clearError } from "./actions";
import { SetError } from "../../../actionTypes/error";

describe("setError function", () => {
  it("should return plain object", () => {
    expect(setError("message")).toEqual({
      type: SetError.DEFAULT,
      message: "message",
    });
  });
});


describe("clearError function", () => {
  it("should return plain object", () => {
    expect(clearError()).toEqual({ type: SetError.CLEAR });
  });
});
