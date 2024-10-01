import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";
import logo from "../mainpage_imgs/cssa_logo.jpg";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "850px" });
  const isAbbreviated = useMediaQuery({ maxWidth: "1200px" });


  const closeDropdown = () => {
    closeMobileMenu();
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";

    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/about" className={linkClassName} onClick={closeMobileMenu}>
            关于我们
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            活动预告
          </NavLink>
        </li>
        <li>
          <div className="navlink-container">
            <NavLink
              to="#"
              className={linkClassName}
            >
              部门介绍
            </NavLink>

            <div className="dropdown-menu">
              <NavLink to="/shiwu" className="dropdown-item" onClick={closeDropdown}>
                事务部 
              </NavLink>
              <NavLink to="/media" className="dropdown-item" onClick={closeDropdown}>
                传媒部
              </NavLink>
              <NavLink to="/business" className="dropdown-item" onClick={closeDropdown}>
                商业部
              </NavLink>
              <NavLink to="/hr" className="dropdown-item" onClick={closeDropdown}>
                人力资源部
              </NavLink>
              <NavLink to="/wenti" className="dropdown-item" onClick={closeDropdown}>
                文体部
              </NavLink>
              <NavLink to="/wenlian" className="dropdown-item" onClick={closeDropdown}>
                文联部
              </NavLink>
              <NavLink to="/careerDev" className="dropdown-item" onClick={closeDropdown}>
                职业发展部
              </NavLink>
              <NavLink to="/grad" className="dropdown-item" onClick={closeDropdown}>
                研究生部
              </NavLink>
              <NavLink to="/tech" className="dropdown-item" onClick={closeDropdown}>
                技术部
              </NavLink>
              <NavLink to="/lockerRoom" className="dropdown-item" onClick={closeDropdown}>
                Locker Room
              </NavLink>
            </div>
          </div>
        </li>
        <li>
          <NavLink
            to="resources"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            资源分享
          </NavLink>
        </li>
        <li>
          <NavLink
            to="apply"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            加入我们
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <div className="banner">
        <img src={logo} alt="logo" className="banner_logo" />
        <NavLink to="/">
        <h1 className="banner_title"> {isAbbreviated ? ("CSSA") : ("UIUC CSSA")}</h1>
        </NavLink>
      </div>
      <nav className="nav container">

        {isMobile && !isMenuOpen && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;
