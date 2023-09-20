import React from "react";
import videoLogo from "../src/assets/video-chat-logo.svg";
import "./App.css";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={videoLogo} alt="logo" />
        <h1>VideoChat App</h1>
      </div>
      <div className="main_contents">
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </div>
  );
}

export default App;
