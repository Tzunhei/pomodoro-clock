import {
  ADD_QUOTES_STARTED,
  ADD_QUOTES_SUCCESS,
  ADD_QUOTES_FAILURE
} from "../constants";

const initialState = {
  quotes: null,
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUOTES_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case ADD_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: action.payload.quotes,
        isLoading: false
      };
    case ADD_QUOTES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
