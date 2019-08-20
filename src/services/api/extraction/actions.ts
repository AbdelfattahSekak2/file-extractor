import { ClearExtractionState, GetExtraction } from "../../../actionTypes/extraction";

export function getExtraction(file: FormData) {
  return {
    file,
    type: GetExtraction.REQUEST,
  };
}

export function clearExtractionState() {
  return {
    type: ClearExtractionState.DEFAULT,
  };
}
