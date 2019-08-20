import { SetError } from "../../../actionTypes/error";


export function setError(message: string) {
  return {
    type: SetError.DEFAULT,
    message,
  }
}

export function clearError() {
  return {
    type: SetError.CLEAR,
  }
}

