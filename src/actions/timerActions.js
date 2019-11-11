import {
  SET_CONFIGURATION,
  CHANGE_MODE,
  START_TIMER,
  STOP_TIMER,
  UPDATE_TIMER,
  RESET_TIMER
} from "../constants";

export const setConfiguration = (option, operation) => {
  return {
    type: SET_CONFIGURATION,
    payload: {
      option,
      operation
    }
  };
};

export const changeMode = mode => {
  return {
    type: CHANGE_MODE,
    payload: {
      mode
    }
  };
};

export const startTimer = () => {
  return {
    type: START_TIMER
  };
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER
  };
};

export const updateTimer = () => {
  return {
    type: UPDATE_TIMER
  };
};

export const resetTimer = () => {
  return {
    type: RESET_TIMER
  };
};
