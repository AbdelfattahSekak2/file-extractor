import { SetError } from "../../../actionTypes/error";

export function setError(message: string) {
  return {
    message,
    type: SetError.DEFAULT,
  };
}

export function clearError() {
  return {
    type: SetError.CLEAR,
  };
}
