import { call, put, takeLatest } from "redux-saga/effects";

import { GetExtraction } from "../../../actionTypes/extraction";
import * as apiClient from "./api";

export function* getExtraction(action: any) {
  try {
    const response = yield call(apiClient.getExtraction, action.file);
    yield put({
      extraction: response.data,
      type: GetExtraction.SUCCESS,
    });
  } catch (e) {
    yield put({
      type: GetExtraction.FAILURE,
    });
  }
}

export default function* extractionSage() {
  yield takeLatest(GetExtraction.REQUEST, getExtraction);
}
