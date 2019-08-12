import { extraction } from "./reducers";
import { GetExtraction } from "../../../actionTypes/extraction";
import { extraction as extractionMock } from "../../../mocks/extraction";

describe("extraction reducer", () => {
  it("should return the correct object on success", () => {
    const action = {
      extraction: extractionMock,
      type: GetExtraction.SUCCESS,
    };
    expect(extraction(null, action)).toEqual(extractionMock);
  });
  it("should return the same state", () => {
    const action = {
      type: "",
    };
    expect(extraction(extractionMock, action)).toEqual(extractionMock);
  });
});
