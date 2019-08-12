import { getExtraction } from "./actions";
import { GetExtraction } from "../../../actionTypes/extraction";

describe("getExraction action", () => {
  const file = new FormData;
  it("should return a plain object", () => {
    expect(getExtraction(file)).toEqual({
      type: GetExtraction.REQUEST,
      file,
    })
  })
})

