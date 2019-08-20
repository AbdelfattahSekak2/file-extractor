import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import { GetExtraction } from "../../../actionTypes/extraction";

import * as apiClient from "./api";

import { extraction } from "../../../mocks/extraction";
import { getExtraction } from "./saga";

describe("getExtraction saga function", () => {
  const file = new FormData();
  const action = {
    file,
    type: GetExtraction.REQUEST,
  };

  it("should dispatch succes type on api success", () => {
    const generator = cloneableGenerator(getExtraction)(action);

    const response = {
      data: extraction,
    };

    expect(generator.next().value).toEqual(call(apiClient.getExtraction, action.file));

    expect(generator.next(response).value).toEqual(put({
      extraction,
      type: GetExtraction.SUCCESS,
    }));

    expect(generator.next().done).toBeTruthy();
  });

  it("should fail gracefully on api error", () => {
    const generator = cloneableGenerator(getExtraction)(action);

    expect(generator.next().value).toEqual(call(apiClient.getExtraction, action.file));

    if (generator.throw) {
      expect(generator.throw({}).value).toEqual(put({ type: GetExtraction.FAILURE }));
    }
  });
});
