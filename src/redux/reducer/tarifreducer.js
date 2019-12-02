import { MOBIL, MOTOR } from "../../type";

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOBIL:
      return action.input * 2000;
    case MOTOR:
      return action.input * 1000;
    default:
      return state;
  }
};
