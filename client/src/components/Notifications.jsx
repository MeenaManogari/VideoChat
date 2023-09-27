import React from "react";
import { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted} = useContext(SocketContext);
  // if (!call) return <></>;

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className="call_receiver">
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </>
  );
};

export default Notifications;
