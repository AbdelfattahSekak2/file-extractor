export function identifyAction(action: any): string {
  return action.type.split("_").slice(0, -1).join("_");
}

export function getSuccessType(action: any): string {
  return `${identifyAction(action)}_SUCCESS`;
}

export function getFailType(action: any): string {
  return `${identifyAction(action)}_FAILURE`;
}

export function getRequestType(action: any): string {
  return `${identifyAction(action)}_REQUEST`;
}
