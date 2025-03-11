import React, { useState } from "react";
import { IconButton, Popper, Paper, Box } from "@mui/material";
import github from "../../assets/github.png";
import bigbucket from "../../assets/bigbucket.png";
import dribble from "../../assets/dribble.png";
import dropbox from "../../assets/dropbox.png";
import mail from "../../assets/mail.png";
import slack from "../../assets/slack.png";

const WidgetPopper = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <svg width="22" height="22" viewBox="0 0 28 28" fill="rgba(20, 24, 33, 0.75)">
          <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" />
        </svg>
      </IconButton>

      <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
        <Paper sx={{ padding: 2, boxShadow: 3, bgcolor: "background.paper", marginTop: "16px" }}>
          <Box sx={{ zIndex: 100 }} >
            <div className="widgtes-container">

              <div className="widgtes-section1">
                <h2 className="browse-name">Browse by App</h2>
                <p>View all App</p>
              </div>

              <div className="browser-content1">
                <div className="git">
                  <img src={github} />
                  <p>Git Hub</p>
                </div>
                <div className="bitbucket">
                  <img src={bigbucket} />
                  <p>Bitbucket</p>
                </div>
                <div className="drib">
                  <img src={dribble} />
                  <p>Dribbble</p>
                </div>
              </div>

              <div className="browser-content1">
                <div className="git">
                  <img src={dropbox} />
                  <p>Drop box</p>
                </div>
                <div className="bitbucket">
                  <img src={mail} />
                  <p>Mail chimp</p>
                </div>
                <div className="drib">
                  <img src={slack} />
                  <p>Slack</p>
                </div>
              </div>

            </div>
          </Box>
        </Paper>
      </Popper>
    </Box>
  );
};

export default WidgetPopper;
