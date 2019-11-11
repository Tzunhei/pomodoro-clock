import React from "react";
import { connect } from "react-redux";
import "./Clock.css";

import { formatNumber } from "../../utils";
import { changeMode } from "../../actions";
import { BREAK, SESSION } from "../../constants";

const Clock = ({ mode, timeLeft, changeMode }) => {
  if (timeLeft < 0) {
    mode === SESSION ? changeMode(BREAK) : changeMode(SESSION);
  }
  const minutes = formatNumber(Math.floor(timeLeft / 60000));
  const seconds = formatNumber(Math.floor((timeLeft % 60000) / 1000));
  const timer = `${minutes}:${seconds}`;
  return (
    <div className="clock-container">
      <h4 className="timer-label" id="timer-label">
        {mode === "SESSION" ? "Session" : "Break"}
      </h4>
      <p className="time-text" id="time-left">
        {timer}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.timer.mode,
    timeLeft: state.timer.timeLeft
  };
};

export default connect(
  mapStateToProps,
  { changeMode }
)(Clock);
