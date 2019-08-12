import {
  getFailType,
  getRequestType,
  getSuccessType,
} from "./helpers";

import { ApiState } from "../../interfaces/apiState";

export function apiErrors(state: ApiState[] = [], action: any) {
  if (action.type === getFailType(action)) {
    return [
      ...state,
      action,
    ];
  }
  return state;
}

export function apiSuccess(state: ApiState[] = [], action: any) {
  if (action.type === getSuccessType(action)) {
    return [
      ...state,
      action,
    ];
  }
  return state;
}

export function apiPendingRequests(state: ApiState[] = [], action: any) {
  if (action.type === getRequestType(action)) {
    return [
      ...state,
      action,
    ];
  } else if (action.type === getSuccessType(action) || action.type === getFailType(action)) {
    return [
      ...state.filter((req) => req.type !== getRequestType(action)),
    ];
  }
  return state;
}
