import Extraction from "../../../interfaces/extractions";
import { GetExtraction } from "../../../actionTypes/extraction";

export function extraction (state: Extraction | null = null, action: any) {
  switch (action.type) {
    case GetExtraction.SUCCESS:
      return action.extraction;
    default:
      return state;
  }
}
