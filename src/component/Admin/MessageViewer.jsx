import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

function MessageViewer() {
  const { messages } = useContext(AppContext);

  return (
    <div className="message-viewer">
      <h2>Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        messages.map((msg, i) => (
          <div key={i} className="message-card">
            <p><strong>{msg.name}</strong> ({msg.email})</p>
            <p>{msg.message}</p>
            <small>{msg.date}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default MessageViewer;
