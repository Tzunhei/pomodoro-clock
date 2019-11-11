import React from "react";
import { connect } from "react-redux";
import "./Configuration.css";

import { setConfiguration } from "../../actions";
import ConfigSection from "../../components/ConfigSection";

const Configuration = ({
  isOn,
  breakLength,
  sessionLength,
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession
}) => {
  const handleIncrementBreak = e => {
    if (breakLength < 60 && !isOn) {
      incrementBreak();
    }
  };

  const handleDecrementBreak = e => {
    if (breakLength > 1 && !isOn) {
      decrementBreak();
    }
  };

  const handleIncrementSession = e => {
    if (sessionLength < 60 && !isOn) {
      incrementSession();
    }
  };

  const handleDecrementSession = e => {
    if (sessionLength > 1 && !isOn) {
      decrementSession();
    }
  };

  return (
    <div className="config-container">
      <ConfigSection
        title={"Break Length"}
        type={"break"}
        value={breakLength}
        handleIncrement={handleIncrementBreak}
        handleDecrement={handleDecrementBreak}
      />
      <ConfigSection
        title={"Session Length"}
        type={"session"}
        value={sessionLength}
        handleIncrement={handleIncrementSession}
        handleDecrement={handleDecrementSession}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isOn: state.timer.isOn,
    breakLength: state.timer.break,
    sessionLength: state.timer.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementBreak: () => dispatch(setConfiguration("break", 1)),
    decrementBreak: () => dispatch(setConfiguration("break", -1)),
    incrementSession: () => dispatch(setConfiguration("session", 1)),
    decrementSession: () => dispatch(setConfiguration("session", -1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Configuration);
