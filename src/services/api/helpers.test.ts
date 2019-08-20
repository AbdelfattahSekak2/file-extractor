import {
  getFailType,
  getRequestType,
  getSuccessType,
  identifyAction,
} from "./helpers";

import { GetExtraction } from "../../actionTypes/extraction";

describe("API Helpers", () => {
  describe("identifyAction", () => {
    it("should correctly decide the action Type", () => {
      expect(identifyAction({ type: GetExtraction.REQUEST })).toBe("GET_EXTRACTION");
    });
  });

  describe("getSuccessType", () => {
    it("should correctly return the action SUCCESS type", () => {
      expect(getSuccessType({ type: GetExtraction.REQUEST })).toBe(GetExtraction.SUCCESS);
    });
  });

  describe("getFailType", () => {
    it("should correctly return the FAILURE type", () => {
      expect(getFailType({ type: GetExtraction.REQUEST })).toBe(GetExtraction.FAILURE);
    });
  });

  describe("getRequestType", () => {
    it("should correctly return the REQUEST type", () => {
      expect(getRequestType({ type: GetExtraction.FAILURE })).toBe(GetExtraction.REQUEST);
    });
  });
});
