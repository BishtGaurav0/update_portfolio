import React, { useState } from "react";
import { NavbarContainerWrapper } from "./NavbarStyled";
import { CgMenuCheese } from "react-icons/cg";
import HamburgerMenuData from "./HamburgerMenu";
import { MdCloseFullscreen } from "react-icons/md";

const Navbar = () => {
  const [showHamnburgerMenu, setShowHamnburgerMenu] = useState(false);

  const handleHamnburgerMenu = () => {
    setShowHamnburgerMenu(!showHamnburgerMenu);
  };

  return (
    <NavbarContainerWrapper>
      <div id="navbar">
        <div id="left-nav">
          <a href="#"> Gaurav Bisht </a>
        </div>

        <div id="menu-bars">
          {!showHamnburgerMenu ? (
            <CgMenuCheese
              className="hamburger_icon"
              onClick={handleHamnburgerMenu}
            />
          ) : (
            <MdCloseFullscreen
              className="close_icon"
              onClick={handleHamnburgerMenu}
            />
          )}
        </div>
      </div>

      <nav className={showHamnburgerMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={handleHamnburgerMenu}>
          {HamburgerMenuData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <a href={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </NavbarContainerWrapper>
  );
};

export default Navbar;
