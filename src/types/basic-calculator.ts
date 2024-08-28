export enum ActionTypes {
  CLEAR = "clear",
  NEGATIVE = "negative",
  BACKSPACE = "BACKSPACE",
  OPERATOR = "operator",
  NUMBER = "number",
  EQUAL = "equal",
}

export enum Operator {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "/",
}

export interface ValueState {
  expression: string;
  currentValue: string;
}

export interface ValueAction {
  type: ActionTypes;
  payload?: string | number;
}
