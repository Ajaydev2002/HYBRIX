import React, { useState } from "react";
import chatList from "../../consts/chatList";

const ChatApp = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleProfileClick = (id) => {
    setSelectedChatId((prevId) => (prevId === id ? null : id)); 
  };

  return (
    <div style={{ width: "40%", margin: "auto", border: "1px solid gray", borderRadius: "10px", padding: "10px" }}>
      <h3>Profiles</h3>
      {chatList.map((chat) => (
        <div
          key={chat.id}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "10px",
            cursor: "pointer",
            background: selectedChatId === chat.id ? "#f5f5f5" : "#fff",
            borderRadius: "5px",
          }}
          onClick={() => handleProfileClick(chat.id)}
        >




          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

            <img src={chat.img} alt={chat.name} width="40" height="40" style={{ borderRadius: "50%" }} />
            
            <div>
              <h4>{chat.name}</h4>
              <p>{chat.message}</p>
            </div>

          </div>



          {selectedChatId === chat.id && (
            <div style={{ marginTop: "10px", padding: "10px", background: "#eee", borderRadius: "5px",height: "100%" }}>
              {chat.chats.map((msg, index) => (

                <div key={index} style={{ marginBottom: "5px" }}>

                  <strong>{msg.sender}:</strong> {msg.message1 || msg.message2 || msg.message3 || msg.message4 || msg.message5}

                  <span style={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}>
                    {msg.time1 || msg.time2 || msg.time3 || msg.time4 || msg.time5}
                  </span>

                </div>

              ))}
            </div>
          )}



        </div>
      ))}
    </div>
  );
};

export default ChatApp;
