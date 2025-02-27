import React, { useState } from "react";
import { IconButton, Popper, Paper, Box, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Checkbox from '@mui/material/Checkbox';
import { styled } from "@mui/material/styles";


const CartBadge = styled(Badge)({
    "& .MuiBadge-badge": {
      top: -7,
      right: -1,
    },
  });

const NotificationPopper = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => !prev);
    };

    return (
        <Box>
            <IconButton onClick={handleClick}>
                <CartBadge badgeContent={4} color="secondary" overlap="circular">
                    <NotificationsIcon fontSize="small" />
                </CartBadge>
            </IconButton>

            <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
                <Paper sx={{ padding: 2, boxShadow: 3, bgcolor: "background.paper" }}>
                    <Box>
                        <div className="notification-container">

                            <div className="notifi-header">
                                <h4>Notifications 4</h4>
                                <p>You have 3 unread meassage</p>
                            </div>

                            <div className="total-notification-items">

                                <div className="new">
                                    <h4>NEW</h4>
                                </div>

                                <div className="notification-items">
                                    <div className="notification-item1">

                                        <div className="notifi-content1">
                                            <div>
                                                <img src="https://themes.themesbrand.com/hybrix/react-material/light/static/media/avatar-1.8d5d7e809a27a1717ed1.jpg" style={{ width: "30px", borderRadius: "50%" }} />
                                            </div>
                                            <div className="notifi-content1-text">
                                                <h5>Your Elite author Graphic Optimization reward is ready!</h5>
                                                <p className="text-2"><AccessTimeIcon fontSize="10px" padding="10px" /> JUST 30 SEC AGO</p>
                                            </div>
                                        </div>

                                        <div className="notifi-content2">
                                            <Checkbox />
                                        </div>
                                    </div>

                                    <div className="notification-item1">

                                        <div className="notifi-content1">
                                            <div>
                                                <img src="https://themes.themesbrand.com/hybrix/react-material/light/static/media/avatar-2.58874a6f667b9b04ce55" style={{ width: "30px", borderRadius: "50%" }} />
                                            </div>
                                            <div className="notifi-content1-text">
                                                <h4>Angela Bernier</h4>
                                                <p className="text-1">Answered to your comment on the cas flow forecast's graph</p>
                                                <p className="text-2"><AccessTimeIcon fontSize="10px" padding="10px" /> 48 MIN AGO</p>
                                            </div>
                                        </div>

                                        <div className="notifi-content2">
                                            <Checkbox />
                                        </div>
                                    </div>

                                    <div className="notification-item1">

                                        <div className="notifi-content1">
                                            <div>
                                                <img src="https://themes.themesbrand.com/hybrix/react-material/light/static/media/avatar-3.36fbb9e4e257ecafc0da.jpg" style={{ width: "30px", borderRadius: "50%" }} />
                                            </div>
                                            <div className="notifi-content1-text">
                                                <h4>Angela Bernier</h4>
                                                <h5>You have received 20 new meassages in the conversation </h5>
                                                <p className="text-2"><AccessTimeIcon fontSize="10px" padding="10px" />  2 HRS AGO</p>
                                            </div>
                                        </div>

                                        <div className="notifi-content2">
                                            <Checkbox />
                                        </div>
                                    </div>
                                </div>

                                <div className="notification-items-2">

                                    <h3>READ BEFORE</h3>

                                    <div className="notification-item1">

                                        <div className="notifi-content1">
                                            <div>
                                                <img src="https://themes.themesbrand.com/hybrix/react-material/light/static/media/avatar-8.64cbb563832bd489e1ef.jpg " style={{ width: "30px", borderRadius: "50%" }} />
                                            </div>
                                            <div className="notifi-content1-text">
                                                <h4>Angela Bernier</h4>
                                                <h5>You have received 20 new meassages in the conversation </h5>
                                                <p className="text-2"><AccessTimeIcon fontSize="10px" padding="10px" />  4 HRS AGO</p>
                                            </div>
                                        </div>

                                        <div className="notifi-content2">
                                            <Checkbox />
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </Box>
                </Paper>
            </Popper>
        </Box>
    );
};

export default NotificationPopper;
