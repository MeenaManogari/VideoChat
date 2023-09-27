import React from "react";
import { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "./components.css";
const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);

  return (
    <div className="video_container">
      {stream && (
        <div className="our_video">
          <div>{name || "Name"}</div>
          <video ref={myVideo} muted autoPlay playsInline />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="our_video">
          <div>{call.name || "Name"}</div>
          <video ref={userVideo} autoPlay playsInline />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
