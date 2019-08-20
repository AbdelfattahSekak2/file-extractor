import { ClearExtractionState, GetExtraction } from "../../../actionTypes/extraction";
import Extraction from "../../../interfaces/extraction";

export function extraction(state: Extraction | null = null, action: any) {
  switch (action.type) {
    case GetExtraction.SUCCESS:
      return action.extraction;
    case ClearExtractionState.DEFAULT:
      return null;
    default:
      return state;
  }
}
