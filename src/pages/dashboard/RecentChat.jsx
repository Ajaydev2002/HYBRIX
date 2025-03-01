import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import reChartProfileDetails from "../../consts/reChartProfileDetails";
import chatList from "../../consts/chatList";

const RecentChat = () => {
    return (
        <div className="recent-chat">
            <div className="recent-chat-container">

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
                    <SearchIcon sx={{ fontSize: 20, marginRight: 1, marginLeft: 3, color: "rgba(89, 91, 96, 0.75)" }} />
                    <input type="text" placeholder="Start for..." name="search" className="RC-search" />
                </div>

                <div className="list-of-chat">
                    {chatList.map((item, index) => (
                        <div className="chat-container" key={index}>

                            <div className="chat-profile-container">
                                <img src={item.img} className="chat-profile-image" />
                                <span className="online-chat-status"></span>
                            </div>

                            <div className="chat-message-content">
                                <h6>{item.name}</h6>
                                <p>{item.message}</p>
                            </div>

                            <div className="chat-time-content">
                                <p>{item.time}</p>
                            </div>

                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentChat;