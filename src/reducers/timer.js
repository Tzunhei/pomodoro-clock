import {
  SESSION,
  BREAK,
  CHANGE_MODE,
  START_TIMER,
  STOP_TIMER,
  UPDATE_TIMER,
  RESET_TIMER,
  SET_CONFIGURATION
} from "../constants";

const initialTimer = {
  mode: SESSION,
  break: 5,
  session: 25,
  isOn: false,
  timeLeft: 25 * 60 * 1000
};

export default (state = initialTimer, action) => {
  switch (action.type) {
    case SET_CONFIGURATION:
      if (action.payload.option === "session") {
        return {
          ...state,
          session: state.session + action.payload.operation,
          timeLeft: (state.session + action.payload.operation) * 60 * 1000
        };
      } else {
        return {
          ...state,
          break: state.break + action.payload.operation
        };
      }
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload.mode,
        timeLeft:
          action.payload.mode === BREAK
            ? state.break * 60 * 1000
            : state.session * 60 * 1000
      };
    case START_TIMER:
      return {
        ...state,
        isOn: true
      };
    case STOP_TIMER:
      return {
        ...state,
        isOn: false
      };
    case UPDATE_TIMER:
      return {
        ...state,
        timeLeft: state.timeLeft - 1000
      };
    case RESET_TIMER:
      return {
        mode: SESSION,
        break: 5,
        session: 25,
        isOn: false,
        timeLeft: 25 * 60 * 1000
      };
    default:
      return state;
  }
};
