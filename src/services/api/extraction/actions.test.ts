import { getExtraction, clearExtractionState } from "./actions";
import { GetExtraction, ClearExtractionState } from "../../../actionTypes/extraction";

describe("getExraction action", () => {
  const file = new FormData;
  it("should return a plain object", () => {
    expect(getExtraction(file)).toEqual({
      type: GetExtraction.REQUEST,
      file,
    });
  })
})

describe("clearExtractionState action", () => {
  it("should return a plain object", () => {
    expect(clearExtractionState()).toEqual({ type: ClearExtractionState.DEFAULT });
  })
})



