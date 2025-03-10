import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import reChartProfileDetails from "../../consts/reChartProfileDetails";
import chatList from "../../consts/chatList";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import ArchiveIcon from '@mui/icons-material/Archive';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

const RecentChat = ({ isOpen }) => {

    const [selectedChatId, setSelectedChatId] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filteredChat, setFilteredChat] = useState(chatList);
    const [menuOpen, setMenuOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = () => {
        if (message.trim() !== "") {
            console.log("message sent:", message);
            setMessage("");
        }
    }
    const menu = () => setMenuOpen(!menuOpen)

    const handleProfileClick = (id) => {
        setSelectedChatId(id);
    };

    const handleExitClick = () => {
        setSelectedChatId(null);
    }

    return (
        <div className="recent-chat" >
            <div className={`recent-chat-container ${isOpen ? "open" : "closed"}`}>

                <div className="recent-chat-heading">
                    <h5>RECENT CHAT</h5>
                </div >

                <div className="chat-profile">
                    {reChartProfileDetails.map((items, index) => (

                        <div className="chat-profile1" key={index}>
                            <div className="profile-container">
                                <img src={items.img} className="RC-profile-image" />
                                <span className="online-status"></span>
                            </div>
                            <p className="RC-profile-name">{items.name}</p>
                        </div>
                    ))
                    }
                </div>

                <div className="RC-search-bar">

                    <SearchIcon sx={{ fontSize: 20, marginRight: 1, marginLeft: 3, color: "rgba(89, 91, 96, 0.75)" }} 
                        onClick={() => {
                            const filteredChat = (chatList).filter((chat) =>
                                chat.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredChat(filteredChat)
                        }} />

                    <input type="text" placeholder="Start for..." name="search" className="RC-search" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                            console.log("searchtext value", setSearchText)
                        }} />

                </div>


                <div className="list-of-chat" >
                    {filteredChat.map((item) => (
                        <div className="chat-container" key={item.id} onClick={() => handleProfileClick(item.id)}>
                            <div className="outer-profile">

                                <div className="chat-profile-container">
                                    <img src={item.img} className="chat-profile-image" />
                                    <span className="online-chat-status"></span>
                                </div>

                                <div className="chat-message-content">
                                    <h6>{item.name}</h6>
                                    <p className={`message ${item.unreadcount > 0 ? "message-style" : "message-normal"}`}>{item.message}</p>
                                </div>

                                <div className="chat-time-content">
                                    <div>
                                        <p>{item.time}</p>
                                    </div>
                                    <div className={`unread-count ${item.unreadcount > 0 ? "unread-counts" : null}`}>
                                        <h5>{item.unreadcount}</h5>
                                    </div>
                                </div>

                            </div>


                            {selectedChatId === item.id && (

                                <div className={`chat-section ${isOpen ? "open" : "closed"}`}>

                                    <div className="chat-header">
                                        <div className="chat-header-image-section">
                                            <img src={item.img} className="chat-header-image" />
                                            <span className="online-status-chat"></span>
                                            <h6>{item.name}</h6>
                                        </div>

                                        <div className="exit-icon-content">
                                            <MoreVertIcon sx={{ fontSize: 20, marginRight: 2, color: "rgb(133, 97, 249)" }} onClick={menu} />

                                            <div className="chat-menu-section" style={{ display: menuOpen ? "block" : "none", }}>
                                                <div className="archive-section">
                                                    <ArchiveIcon sx={{ fontSize: "20px" }} />
                                                    <p>Archive</p>
                                                </div>
                                                <div className="share-section">
                                                    <ShareIcon sx={{ fontSize: "20px" }} />
                                                    <p>Muted</p>
                                                </div>
                                                <div className="delete-section">
                                                    <DeleteIcon sx={{ fontSize: "20px" }} />
                                                    <p>Delete</p>
                                                </div>
                                            </div>

                                            <CloseIcon sx={{ fontSize: 18, color: "rgb(255, 108, 108);", backgroundColor: "#fff0f0", padding: "5px", borderRadius: "5px" }} onClick={(e) => {
                                                e.stopPropagation();
                                                handleExitClick();
                                            }} />
                                        </div>
                                    </div>

                                    {item.chats.map((msg) => (
                                        <div>
                                             <div key={msg.id} className={`chat-detail1 ${msg.sender === "You" ? "msg-send-container" : "msg-received-container"}`}>

                                                {msg.sender !== "You" && (
                                                    <div className="chat-sender-image-container">
                                                        <img src={item.img} className="chat-sender-image" alt="Sender" />
                                                    </div>
                                                )}

                                                <div className="chat-sender-msg1">
                                                    <div className={`msg ${msg.sender === item.name ? "msg-received" : "msg-send"}`}>
                                                        {msg.message}
                                                    </div>

                                                    <div className={`chats-time-content ${msg.sender === "You" ? "chat-time-content-send" : "chat-time-content-received"}`} >

                                                        {msg.sender === "You" && (
                                                            <div className="seen-status">
                                                                <svg width="15" height="15" viewBox="0 0 25 30" fill="rgb(45, 203, 115)">
                                                                    <path d="m18 7-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41 6 19l1.41-1.41L1.83 12 .41 13.41z" />
                                                                </svg>
                                                            </div>
                                                        )}

                                                        <div>
                                                            <p>{msg.time}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))}

                                    <div className="send-message-container">

                                        <div className="send-message-imput-section">
                                            <input type="text" placeholder="Enter Message..." name="search" className="send-chat" value={message} onChange={handleInputChange} />
                                        </div>

                                        <div className="message-send-btn" onClick={sendMessage}>
                                            <svg width="20" height="15" viewBox="0 0 20 20" fill="#fff" >
                                                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))
                    }

                </div>

            </div>
        </div>
    )
}

export default RecentChat;