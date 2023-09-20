import React, { useContext } from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
import "./components.css";

const Options = ({ children }) => {
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="user_video_container">
      <div className="user_area">
        <form noValidate autoComplete="off">
          <div className="video_options">
            <div className="video_id">
              <h6>Account Info</h6>
              <input
                type="text"
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={me}>
                <button>copy your ID</button>
              </CopyToClipboard>
            </div>
            <div className="video_id">
              <h6>Make a Call</h6>
              <input
                type="text"
                label="Id to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <button onClick={leaveCall}>Hangup</button>
              ) : (
                <button onClick={() => callUser(idToCall)}>call</button>
              )}
            </div>
          </div>
        </form>{" "}
        {children}
      </div>
    </div>
  );
};

export default Options;
