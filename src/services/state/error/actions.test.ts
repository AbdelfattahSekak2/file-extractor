import { SetError } from "../../../actionTypes/error";
import { clearError, setError } from "./actions";

describe("setError function", () => {
  it("should return plain object", () => {
    expect(setError("message")).toEqual({
      message: "message",
      type: SetError.DEFAULT,
    });
  });
});

describe("clearError function", () => {
  it("should return plain object", () => {
    expect(clearError()).toEqual({ type: SetError.CLEAR });
  });
});
