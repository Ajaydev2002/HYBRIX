import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Header.css';
import WidgetPopper from "../pages/Header/WidgetPopper";
import ShoppingPopper from "../pages/Header/ShoppingPopper";
import NotificationPopper from "../pages/Header/NotificationPopper";
import ProfilePopper from "../pages/Header/ProfilePopper";
import Navigation from "../consts/Navigation";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from "../assets/logo.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Header = (props) => {

    const { isOpen, toggle } = props;

    const [OpenSidebar, setOpenSidebar] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const [darkList, setDarkList] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [openChild, setOpenChild] = useState(null);

    const handleItemClick = (title) => {
        setOpenChild((prev) => (prev === title ? null : title));
    }

    const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
    const [notificationOpen, setNotificationOpen] = useState(false);

    const [profileAnchorEl, setProfileAnchorEl] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);

    const [widgetsAnchorEl, setWidgetsAnchorEl] = useState(null);
    const [widgetsOpen, setWidgetsOpen] = useState(false);

    const [shoppingAnchorEl, setShoppingAnchorEl] = useState(null);
    const [shoppingOpen, setShoppingOpen] = useState(false);

    const handleNotificationClick = (event) => {
        setNotificationAnchorEl(event.currentTarget);
        setNotificationOpen((prev) => !prev);
        setProfileOpen(false);
        setWidgetsOpen(false);
        setShoppingOpen(false);
        setDarkList(false);
    };

    const handleProfileClick = (event) => {
        setProfileAnchorEl(event.currentTarget);
        setProfileOpen((prev) => !prev);
        setNotificationOpen(false);
        setWidgetsOpen(false);
        setShoppingOpen(false);
        setDarkList(false);
    };

    const handleWidgetsClick = (event) => {
        setWidgetsAnchorEl(event.currentTarget);
        setWidgetsOpen((prev) => !prev);
        setNotificationOpen(false);
        setShoppingOpen(false);
        setProfileOpen(false);
        setDarkList(false);
    };

    const handleShoppingClick = (event) => {
        setShoppingAnchorEl(event.currentTarget);
        setShoppingOpen((prev) => !prev);
        setNotificationOpen(false);
        setProfileOpen(false);
        setWidgetsOpen(false);
        setDarkList(false);
    }

    const toogleDark = () => {
        setDarkList(!darkList);
        setNotificationOpen(false);
        setProfileOpen(false);
        setShoppingOpen(false);
        setWidgetsOpen(false);
    }

    const handleDarkItemsClick = () => {
        setDarkList(false)
    }

    const toogleSearch = () => {
        setShowSearch(!showSearch);
    };

    const searchExit = () => {
        setShowSearch(false);
    };

    const toogleFullScreen = () => {

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => setFullScreen(true));
        } else {
            document.exitFullscreen().then(() => setFullScreen(false));
        }
    }

    const clickHandle = () => setOpenSidebar(!OpenSidebar);

    return (
        <div className="container">

            <div
                style={{ width: isOpen ? "240px" : "60px" }}
                className={`sidebar ${OpenSidebar ? "sidebar-open" : "sidebar-closed"}`}
            >

                <div className="logo-section" style={{ width: isOpen ? "240px" : "60px" }}>
                    <img src="https://themes.themesbrand.com/hybrix/react-material/light/static/media/logo-dark.00f35cb27393e7e7b073.png" alt="MUI logo" style={{ width: '100px', display: isOpen ? "block" : "none" }} />
                    <img src={logo} style={{ width: '35px', display: isOpen ? "none" : "block" }} />
                </div>

                <div className="sidebar-content">

                    {Navigation.map((item, index) => (
                        item.kind === 'header' ? (

                            <div key={index}>
                                <div style={{ display: isOpen ? "block" : "none" }} className="menu-header">{item.title}</div>
                                <div style={{ display: isOpen ? "none" : "block" }} className="menu-header-dot">...</div>
                            </div>

                        ) : (
                            <div key={index}>
                                <Link to={item.segment} className="link" onClick={() => handleItemClick(item.title)} >

                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link-text">{item.title}</div>

                                    {item.children ? <ArrowForwardIosIcon className={`sidebar-arrow ${isOpen ? "show-icon" : "hide-icon"}`} fontSize="10px" /> : ""}

                                </Link>

                                {openChild === item.title && (
                                    <div className={`childMenu ${isOpen ? "sidebar-child-open" : "sidebar-child-closed"}`}>
                                        <div className="nav-child-items">   
                                        {item.children.map((child, index) => (
                                            <Link to={child.segment} key={index}>
                                                {child.title}
                                            </Link>
                                        ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    ))};

                </div>

            </div>


            <div className={`Header-main-content ${isOpen ? "open" : "closed"}`} >

                <div className={`header-container ${isOpen ? "open" : "closed"}`} >

                    <div className="search-container">

                        <div className="menu-bar" onClick={toggle}>
                            <MenuIcon className={`Menuicon ${isOpen ? "open" : "closed"}`} />
                            <NavigateNextIcon className={`Navigationicon ${isOpen ? "open" : "closed"}`} />
                        </div>

                        <div className="tabel-nav-btn" onClick={clickHandle}>
                            <NavigateNextIcon className={`nav-open ${OpenSidebar ? "open" : "closed"}`} />
                        </div>

                        <div className="header-search-icon" onClick={toogleSearch}>
                            <SearchIcon sx={{ fontSize: 18, marginRight: 1, marginLeft: 3 }} />
                            <p>Search for hybrix...</p>
                        </div>

                    </div>

                    <div className="headeer-section2">
                        <div>
                            <WidgetPopper
                                handleClick={handleWidgetsClick}
                                open={widgetsOpen}
                                anchorEl={widgetsAnchorEl}
                            />
                        </div>

                        <div>
                            <ShoppingPopper
                                handleClick={handleShoppingClick}
                                open={shoppingOpen}
                                anchorEl={shoppingAnchorEl}
                            />
                        </div>

                        <div className="full-screen" >
                            <IconButton onClick={toogleFullScreen} color="rgba(20, 24, 33, 0.75)">
                                {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                            </IconButton>
                        </div>

                        <div className="dark-mode">

                            <div onClick={toogleDark}>
                                <svg width="20" height="20" viewBox="0 0 24 23" fill="rgba(20, 24, 33, 0.75)">
                                    <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                                </svg>
                            </div>

                            <div className={`dark-mode-container ${darkList ? "show-darklist" : "hide-darklist"}`}>

                                <div className="default-light-mode" onClick={handleDarkItemsClick}>
                                    <svg width="20" height="20" viewBox="0 0 24 23" fill="rgba(20, 24, 33, 0.75)">
                                        <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                                    </svg>
                                    <p>Default (light mode)</p>
                                </div>

                                <div className="dark-mode" onClick={handleDarkItemsClick}>
                                    <svg width="20" height="20" viewBox="0 0 24 23" fill="rgba(20, 24, 33, 0.75)">
                                        <path d="M14 4c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65C17.53 2.5 15.82 2 14 2z" />
                                    </svg>
                                    <p>Dark</p>
                                </div>

                                <div className="auto-light-mode" onClick={handleDarkItemsClick}>
                                    <svg width="20" height="20" viewBox="0 0 24 23" fill="rgba(20, 24, 33, 0.75)">
                                        <path d="m11 7-3.2 9h1.9l.7-2h3.2l.7 2h1.9L13 7h-2zm-.15 5.65L12 9l1.15 3.65h-2.3zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48z" />
                                    </svg>
                                    <p>Auto (System Default)</p>
                                </div>

                            </div>
                        </div>

                        <div>
                            <NotificationPopper
                                handleClick={handleNotificationClick}
                                open={notificationOpen}
                                anchorEl={notificationAnchorEl}
                            />
                        </div>

                        <div>
                            <ProfilePopper
                                handleClick={handleProfileClick}
                                open={profileOpen}
                                anchorEl={profileAnchorEl}
                            />
                        </div>
                    </div>
                </div>



                <div className={`header-search-bar-container ${showSearch ? "open-searchbar" : "close-searchbar"}`}>
                    <div className="hearder-search-bar">
                        <div className="header-search-content">
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: { xs: '100%', md: '50ch' } } }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="search for hybrix..." variant="outlined" />
                            </Box>
                        </div>

                        <div className="header-search-exit-btn" onClick={searchExit}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="rgba(20, 24, 33, 0.75)">
                                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;
