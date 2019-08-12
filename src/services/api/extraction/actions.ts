import { GetExtraction } from "../../../actionTypes/extraction";

export function getExtraction(file: FormData) {
  return {
    type: GetExtraction.REQUEST,
    file,
  }
}
