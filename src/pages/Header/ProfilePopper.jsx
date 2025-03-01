import React, { useState } from "react";
import { Popper, Paper, Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HelpIcon from '@mui/icons-material/Help';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfilePopper = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpen(!open);
    };

    return (
        <Box>
            <Box onClick={handleClick}>
                <div className="profile-section1">
                    <div>
                        <img src="https://themes.themesbrand.com/hybrix/react-material/light/static/media/avatar-1.8d5d7e809a27a1717ed1.jpg" className="profile-image"/>
                    </div>
                    <div className="profile-section1-context1">
                        <h5>Admin</h5>
                        <p>Founder</p>
                    </div>
                </div>
            </Box>

            <Popper open={open} anchorEl={anchorEl} placement="bottom">
                <Paper sx={{ padding: 2, boxShadow: 3, bgcolor: "background.paper" }}>
                    <Box>
                        <div className="profile-container">
                            <div className="profile-content1">
                                <h3>Welcome Diana!</h3>
                                <div className="profile"><PersonIcon fontSize="10px"/> <p>Profile</p> </div>
                                <div className="profile"><MessageIcon fontSize="10px"/> <p>Messages</p> </div>
                                <div className="profile"><AssignmentIcon fontSize="10px"/> <p>Taskboard</p> </div>
                                <div className="profile"><HelpIcon fontSize="10px"/> <p>Help</p> </div>
                                <div className="Balance"><AccountBalanceWalletIcon fontSize="10px"/> <p>Balance : <span>$ 8451.36 </span></p> </div>
                                <div className="profile"><SettingsIcon fontSize="10px"/> <p>Settings</p> </div>
                                <div className="profile"><LockIcon fontSize="10px"/> <p>Lock screen</p> </div>
                                <div className="profile"><LogoutIcon fontSize="10px"/> <p>Logout</p> </div>
                            </div>
                        </div>
                    </Box>
                </Paper>
            </Popper>
        </Box>
    );
};

export default ProfilePopper;
