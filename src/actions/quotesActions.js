import {
  ADD_QUOTES_STARTED,
  ADD_QUOTES_SUCCESS,
  ADD_QUOTES_FAILURE
} from "../constants";

import axios from "axios";

export const fetchQuotes = () => {
  return (dispatch, getState) => {
    dispatch(addQuotesStarted());
    axios
      .get("https://type.fit/api/quotes")
      .then(res => dispatch(addQuotesSuccess(res.data)))
      .catch(error => dispatch(addQuotesFailure(error)));
  };
};

export const addQuotesStarted = () => {
  return {
    type: ADD_QUOTES_STARTED
  };
};

export const addQuotesSuccess = quotes => {
  return {
    type: ADD_QUOTES_SUCCESS,
    payload: {
      quotes
    }
  };
};

export const addQuotesFailure = error => {
  return {
    type: ADD_QUOTES_FAILURE,
    payload: {
      error
    }
  };
};
