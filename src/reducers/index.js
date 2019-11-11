import { combineReducers } from "redux";
import timer from "./timer";
import quotes from "./quotes";

export default combineReducers({
  timer,
  quotes
});
