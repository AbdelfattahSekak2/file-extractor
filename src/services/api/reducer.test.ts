import { apiErrors, apiPendingRequests, apiSuccess } from "./reducer";

import { GetExtraction } from "../../actionTypes/extraction";

import { ApiState } from "../../interfaces/apiState";

describe("API reducer", () => {
  describe("apiErrors", () => {
    const errors: ApiState[] = [];

    it("should correctly add API errors to state in case of error", () => {
      const action = { type: GetExtraction.FAILURE };
      expect(apiErrors(errors, action)).toHaveLength(1);
    });

    it("shouldn't add api Error if action is not an error", () => {
      const action = { type: GetExtraction.SUCCESS };
      expect(apiErrors([], action)).toHaveLength(0);
    });
  });

  describe("apiPendingRequests", () => {
    let pendingRequests: ApiState[] = [];

    it("should add the request to the list of pending Requests", () => {
      const action = { type: GetExtraction.REQUEST };
      expect(apiPendingRequests(pendingRequests, action)).toHaveLength(1);
    });

    it("shouldn't add action to list of pending Requests if it isn't one", () => {
      const action = { type: "" };
      expect(apiPendingRequests(pendingRequests, action)).toHaveLength(0);
    });

    it("should remove a pending Request if a new action SUCCESS arrives", () => {
      pendingRequests = [{ type: GetExtraction.REQUEST }];

      const action = { type: GetExtraction.SUCCESS };
      expect(apiPendingRequests(pendingRequests, action)).toHaveLength(0);
    });

    it("should remove a pending Request if a new action FAILURE arrives", () => {
      const action = { type: GetExtraction.FAILURE };
      expect(apiPendingRequests(pendingRequests, action)).toHaveLength(0);
    });
  });

  describe("apiSuccess", () => {
    const success: ApiState[] = [];

    it("should add the action if it's a SUCCESS", () => {
      const action = { type: GetExtraction.SUCCESS };
      expect(apiSuccess(success, action)).toHaveLength(1);
    });

    it("shouldn't add api Error if action is not an success", () => {
      const action = { type: GetExtraction.FAILURE };
      expect(apiSuccess(success, action)).toHaveLength(0);
    });
  });
});
