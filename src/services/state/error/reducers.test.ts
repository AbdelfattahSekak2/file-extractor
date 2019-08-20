import { SetError } from "../../../actionTypes/error";
import { GetExtraction } from "../../../actionTypes/extraction";
import { error } from "./reducers";

describe("error reducer", () => {
  it("should return the correct object on success state", () => {
    const action = {
      message: "message",
      type: SetError.DEFAULT,
    };
    expect(error(null, action)).toEqual("message");
  });

  it("should return the right message on get extraction error state", () => {
    const action = {
      type: GetExtraction.FAILURE,
    };
    expect(error(null, action)).toEqual("Something went wrong");
  });

  it("should return the right object on clear state", () => {
    const action = {
      type: SetError.CLEAR,
    };
    expect(error("message", action)).toEqual(null);
  });

  it("should return the same state", () => {
    const action = {
      type: "",
    };
    expect(error("message", action)).toEqual("message");
  });

});
