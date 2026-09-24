import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
import "./NavbarHook.css";
import logo from "../mainpage_imgs/cssa_logo.jpg";
import DEPARTMENTS from "../departments";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const location = useLocation();

  // Close menus whenever the page changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDeptOpen(false);
  }, [location.pathname]);

  const deptActive = DEPARTMENTS.some(
    (d) => location.pathname.toLowerCase() === d.to.toLowerCase()
  );

  return (
    <header className={`header ${isMenuOpen ? "header-open" : ""}`}>
      <div className="header_inner">
        <Link to="/" className="brand" aria-label="UIUC CSSA 首页">
          <img src={logo} alt="" className="brand_logo" />
          <span className="brand_text">
            <span className="brand_name">UIUC CSSA</span>
            <span className="brand_sub">中国学生学者联合会</span>
          </span>
        </Link>

        <nav className="nav" aria-label="主导航">
          <ul className="nav_list">
            <li>
              <NavLink to="/about" className="nav_link">关于我们</NavLink>
            </li>
            <li>
              <NavLink to="/events" className="nav_link">活动预告</NavLink>
            </li>
            <li
              className={`nav_dept ${isDeptOpen ? "nav_dept-open" : ""}`}
              onMouseLeave={() => setIsDeptOpen(false)}
            >
              <button
                type="button"
                className={`nav_link nav_dept_btn ${deptActive ? "active" : ""}`}
                aria-expanded={isDeptOpen}
                onClick={() => setIsDeptOpen((v) => !v)}
                onMouseEnter={() => setIsDeptOpen(true)}
              >
                部门介绍 <IoChevronDown className="nav_chevron" />
              </button>
              <div className="nav_dropdown">
                {DEPARTMENTS.map((d) => (
                  <NavLink key={d.to} to={d.to} className="nav_dropdown_item">
                    <span>{d.name}</span>
                    {d.en && <span className="nav_dropdown_en">{d.en}</span>}
                  </NavLink>
                ))}
              </div>
            </li>
            <li>
              <NavLink to="/resources" className="nav_link">资源分享</NavLink>
            </li>
            <li>
              <NavLink to="/apply" className="nav_cta">加入我们</NavLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="nav_toggle"
          aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>
    </header>
  );
};

export default NavbarHook;
