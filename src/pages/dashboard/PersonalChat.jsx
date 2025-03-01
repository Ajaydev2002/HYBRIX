import React from "react";
import chatList from "../../consts/chatList";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

const PersonalChat = () => {
    return (
        <div className="chats-container">
            {chatList.map((items) => (
                <div className="chat-content">
                    <div className="chat-header">
                        <div>
                            <img src={items.images} />
                            <h6>{items.name}</h6>
                        </div>
                        <div className="exit-icon-content">
                            <MoreVertIcon/>
                            <CloseIcon/>
                        </div>
                    </div>

                    <div className="chat-details-container">
                        <div className="chat-detail1">
                            <div className="chat-sender-image-container">
                                <img src={items.img} className="chat-sender-image"/>
                            </div>
                            <div className="chat-sender-msg1">
                                <h5>{items.chats.message1}</h5>
                                <p>{items.chats.time1}</p>
                            </div>
                        </div>

                        <div className="chat-detail2">
                            <div className="chat-sender-msg2">
                                <h5>{items.chats.message2}</h5>
                                <p>{items.chats.time2}</p>
                            </div>
                        </div>

                        <div className="chat-detail3">
                            <div className="chat-sender-image-container">
                                <img src={items.img}  className="chat-sender-image"/>
                            </div>
                            <div className="chat-sender-msg3">
                                <h5>{items.chats.message3}</h5>
                                <p>{items.chats.time3}</p>
                            </div>
                        </div>

                        <div className="chat-detail4">
                            <div className="chat-sender-image-container">
                                <img src={items.img} className="chat-sender-image"/>
                            </div>
                            <div className="chat-sender-msg4">
                                <h5>{items.chats.message4}</h5>
                                <p>{items.chats.time4}</p>
                            </div>
                        </div>


                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default PersonalChat;