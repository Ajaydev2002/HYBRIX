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
import logo from "../assets/logo.png";

const Header = (props) => {

    const { isOpen, toggle } = props;

    const [OpenSidebar, setOpenSidebar] = useState(false);

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

                            <div style={{ display: isOpen ? "block" : "none" }} key={index} className="menu-header">{item.title}</div>

                        ) : (
                            <Link to={item.segment} key={index} className="link" >

                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link-text">{item.title}</div>

                            </Link>
                        )
                    ))}

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

                        <SearchIcon sx={{ fontSize: 20, marginRight: 1, marginLeft: 3 }} />

                        <div className="search-text">
                            <input type="text" placeholder="Search for hybrix..." name="search" className="search-bar" />
                        </div>
                    </div>

                    <div className="headeer-section2">
                        <WidgetPopper />
                        <ShoppingPopper className="shopping" />
                        <NotificationPopper className="notification" />
                        <ProfilePopper />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;
