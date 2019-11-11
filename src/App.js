import React from "react";
import "./App.css";

import Quote from "./screens/Quote";
import Timer from "./screens/timer/Timer";
import Footer from "./screens/Footer";
import Title from "./screens/Title";

const App = () => {
  return (
    <div className="App">
      <Title />
      <div className="app-container">
        <Quote />
        <Timer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
