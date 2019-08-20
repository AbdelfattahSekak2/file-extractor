import { ClearExtractionState, GetExtraction } from "../../../actionTypes/extraction";
import { clearExtractionState, getExtraction } from "./actions";

describe("getExraction action", () => {
  const file = new FormData();
  it("should return a plain object", () => {
    expect(getExtraction(file)).toEqual({
      file,
      type: GetExtraction.REQUEST,
    });
  });
});

describe("clearExtractionState action", () => {
  it("should return a plain object", () => {
    expect(clearExtractionState()).toEqual({ type: ClearExtractionState.DEFAULT });
  });
});
