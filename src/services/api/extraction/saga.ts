import { put, takeLatest, call } from "redux-saga/effects";

import * as apiClient from "./api";
import { GetExtraction } from "../../../actionTypes/extraction";

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
