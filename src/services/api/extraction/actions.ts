import { GetExtraction, ClearExtractionState } from "../../../actionTypes/extraction";

export function getExtraction(file: FormData) {
  return {
    type: GetExtraction.REQUEST,
    file,
  }
}

export function clearExtractionState() {
  return {
    type: ClearExtractionState.DEFAULT,
  }
}
