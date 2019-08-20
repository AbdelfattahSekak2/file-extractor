import { ClearExtractionState, GetExtraction } from "../../../actionTypes/extraction";
import { extraction as extractionMock } from "../../../mocks/extraction";
import { extraction } from "./reducers";

describe("extraction reducer", () => {
  it("should return the correct object on success", () => {
    const action = {
      extraction: extractionMock,
      type: GetExtraction.SUCCESS,
    };
    expect(extraction(null, action)).toEqual(extractionMock);
  });

  it("should return return null", () => {
    const action = {
      type: ClearExtractionState.DEFAULT,
    };
    expect(extraction(extractionMock, action)).toEqual(null);
  });
  it("should return the same state", () => {
    const action = {
      type: "",
    };
    expect(extraction(extractionMock, action)).toEqual(extractionMock);
  });
});
