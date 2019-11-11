import React from "react";
import { connect } from "react-redux";
import { startTimer, stopTimer, updateTimer, resetTimer } from "../../actions";
import "./Controls.css";
import accurateInterval from "accurate-interval";

import Button from "../../components/Button";

let timerInterval;
let audioBeep;

const Controls = ({
  timeLeft,
  isOn,
  startTimer,
  stopTimer,
  resetTimer,
  updateTimer
}) => {
  if (timeLeft === 0) {
    audioBeep.play();
  }

  const handleStartStopClick = () => {
    if (isOn && timerInterval) {
      stopTimer();
      timerInterval.clear();
    } else {
      startTimer();
      timerInterval = accurateInterval(updateTimer, 1000);
    }
  };

  const handleResetClick = () => {
    if (timerInterval) {
      timerInterval.clear();
      resetTimer();
      audioBeep.pause();
      audioBeep.currentTime = 0;
    }
  };

  return (
    <div className="controls-container">
      <Button handleClick={handleStartStopClick} id="start_stop">
        {isOn ? "Stop" : "Start"}
      </Button>
      <Button handleClick={handleResetClick} id="reset">
        Reset
      </Button>
      <audio
        id="beepp"
        src="https://goo.gl/65cBl1"
        ref={audio => (audioBeep = audio)}
      ></audio>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timeLeft: state.timer.timeLeft,
    isOn: state.timer.isOn
  };
};

export default connect(
  mapStateToProps,
  { startTimer, stopTimer, updateTimer, resetTimer }
)(Controls);
