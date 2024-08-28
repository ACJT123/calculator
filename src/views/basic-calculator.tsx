import { useReducer } from "react";
import Buttons from "../components/buttons";
import { ValueState, ValueAction, ActionTypes, Operator } from "../types/basic-calculator";


export default function BasicCalculator() {
  function reducer(state: ValueState, action: ValueAction): ValueState {
    const { expression, currentValue } = state;

    switch (action.type) {
      case ActionTypes.CLEAR:
        return { expression: "", currentValue: "0" };

      case ActionTypes.NEGATIVE:
        return {
          ...state,
          currentValue: (-parseFloat(currentValue)).toString(),
          expression: `-${expression}`,
        };

      case ActionTypes.BACKSPACE:
        return {
          ...state,
          currentValue: currentValue.slice(0, -1) || "0",
          expression: expression.slice(0, -1),
        };

      case ActionTypes.NUMBER: {
        const newNumber = action.payload!.toString();
        return {
          ...state,
          currentValue:
            currentValue === "0" ? newNumber : currentValue + newNumber,
          expression: expression + newNumber,
        };
      }

      case ActionTypes.OPERATOR:
        return {
          ...state,
          currentValue: "0",
          expression: expression + `${action.payload}`,
        };

      case ActionTypes.EQUAL:
        try {
          const result = eval(expression.replace(/X/g, "*")); // exec calculation using eval (expression in string), replace X to * for multiply

          return {
            ...state,
            currentValue: result.toString(),
            expression: result.toString(),
          };
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
          return { ...state, currentValue: "Error", expression: "" };
        }

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    expression: "",
    currentValue: "0",
  });

  function handleOnClick(type: ActionTypes, payload?: string | number) {
    dispatch({ type, payload });
  }

  return (
    <div>
      <form className="shadow-white/10 shadow-lg p-8">
        <div>
          <input
            type="text"
            className="bg-transparent w-full text-right mb-4 text-3xl text-[#D4D4D2]"
            value={state.expression || state.currentValue}
            readOnly
          />
        </div>

        <div className="grid grid-cols-4 place-items-center gap-4">
          <Buttons
            label="C"
            buttonType={ActionTypes.CLEAR}
            onClick={() => handleOnClick(ActionTypes.CLEAR)}
          />
          <Buttons
            label="+/-"
            buttonType={ActionTypes.NEGATIVE}
            onClick={() => handleOnClick(ActionTypes.NEGATIVE)}
          />
          <Buttons
            label="&#x8;"
            buttonType={ActionTypes.BACKSPACE}
            onClick={() => handleOnClick(ActionTypes.BACKSPACE)}
          />
          <Buttons
            label="/"
            buttonType={ActionTypes.OPERATOR}
            onClick={() => handleOnClick(ActionTypes.OPERATOR, Operator.DIVIDE)}
          />

          <Buttons
            label="7"
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, 7)}
          />
          <Buttons
            label="8"
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, 8)}
          />
          <Buttons
            label="9"
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, 9)}
          />
          <Buttons
            label="X"
            buttonType={ActionTypes.OPERATOR}
            onClick={() =>
              handleOnClick(ActionTypes.OPERATOR, Operator.MULTIPLY)
            }
          />

          <Buttons
            label="4"
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, 4)}
          />
          <Buttons
            label="5"
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, 5)}
          />
          <Buttons
            label="6"
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, 6)}
          />
          <Buttons
            label="-"
            buttonType={ActionTypes.OPERATOR}
            onClick={() =>
              handleOnClick(ActionTypes.OPERATOR, Operator.SUBTRACT)
            }
          />

          <Buttons
            label="1"
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, 1)}
          />
          <Buttons
            label="2"
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, 2)}
          />
          <Buttons
            label="3"
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, 3)}
          />
          <Buttons
            label="+"
            buttonType={ActionTypes.OPERATOR}
            onClick={() => handleOnClick(ActionTypes.OPERATOR, Operator.ADD)}
          />

          <Buttons
            label="0"
            buttonType={ActionTypes.NUMBER}
            className="col-span-2 w-full"
            onClick={() => handleOnClick(ActionTypes.NUMBER, 0)}
          />
          <Buttons
            label="."
            buttonType={ActionTypes.NUMBER}
            onClick={() => handleOnClick(ActionTypes.NUMBER, ".")}
          />
          <Buttons
            label="="
            buttonType={ActionTypes.EQUAL}
            onClick={() => handleOnClick(ActionTypes.EQUAL)}
          />
        </div>
      </form>
    </div>
  );
}
