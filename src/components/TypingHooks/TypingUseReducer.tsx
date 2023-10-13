import { Reducer, useReducer } from "react";

type ReducerState = {
  count: number;
};

type ReducerAction =
  | {
      type: "add";
      add: number;
    }
  | {
      type: "subtract";
      subtract: number;
    };

export default function TypingUseReducer() {
  const reducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
    switch (action.type) {
      case "add":
        return { count: state.count + action.add };
      case "subtract":
        return { count: state.count - action.subtract };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  dispatch({ type: "add", add: 1 });

  // @ts-expect-error wrong type
  dispatch({ type: "SUBTRACT", subtract: 1 });

  // @ts-expect-error missing action
  dispatch({ type: "add" });

  // @ts-expect-error wrong action
  dispatch({ type: "subtract", subtract: "123" });

  return <>{state}</>;
}
