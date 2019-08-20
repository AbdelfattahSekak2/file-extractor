import { SetError } from "../../../actionTypes/error";
import { GetExtraction } from "../../../actionTypes/extraction";

export function error(state: string | null = null, action: any) {
  switch (action.type) {
    case SetError.DEFAULT:
      return action.message;
    case GetExtraction.FAILURE:
      return "Something went wrong";
    case SetError.CLEAR:
      return null;
    default:
      return state;
  }
}
