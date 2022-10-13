import { ACTIONS } from "./App";

export default function Operatorbtn({ dispatch, operator }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operator } })
      }
    >
      {operator}
    </button>
  );
}
