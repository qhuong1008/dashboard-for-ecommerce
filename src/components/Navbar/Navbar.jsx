import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
          </div>
          <div className="item">
            <DarkModeIcon />
          </div>
          <div className="item">
            <FullscreenIcon />
          </div>
          <div className="item">
            <NotificationsNoneIcon />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon />
          </div>
          <div className="item">
            <img
              className="avatar"
              src="https://i.guim.co.uk/img/media/c9b0aad22638133aa06cd68347bed2390b555e63/0_477_2945_1767/master/2945.jpg?width=620&quality=45&dpr=2&s=none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
