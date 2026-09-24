import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavbarHook from "./NavbarHook/NavbarHook";
import SiteFooter from "./components/SiteFooter";
import ScrollManager from "./components/ScrollManager";
import "./components/layout.css";
import Home from "./pages/Home";
import Shiwu from "./pages/shiwu_page/shiwu";
import Media from "./pages/media_page/media";
import Business from "./pages/business_page/business";
import About from "./pages/about/about";
import Apply from "./pages/apply/apply";
import Events from "./pages/events/events";
import NewEvent from "./pages/new_event/new_event";
import Resources from "./pages/resources/resources";
import Wenti from "./pages/wenti_page/wenti";
import Wenlian from "./pages/wenlian_page/wenlian";
import Hr from "./pages/hr_page/hr";
import StudentDev from "./pages/studentDev_page/studentDev";

const AppRoutes = () => {
  // Check if the current path is the home page
  // const isHomePage = location.pathname === '/';

  return (
    <div className="wrapper">
      {/* <div className={`app-container ${isHomePage ? 'home-background' : ''}`}> */}
      <div className="app-container">
        <NavbarHook className="navbar" />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shiwu" element={<Shiwu />} />
            <Route path="/media" element={<Media />} />
            <Route path="/business" element={<Business />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/events" element={<Events />} />
            <Route path="/new_event" element={<NewEvent />} />
            <Route path="/resources" element={<Resources />} />
            <Route path = "/Hr" element={<Hr />}/>
            <Route path = "/Wenti" element={<Wenti />}/>
            <Route path = "/Wenlian" element={<Wenlian />}/>
            <Route path = "/StudentDev" element={<StudentDev />}/>
            {/* 职业发展部、研究生部、技术部已合并为学生发展部 */}
            <Route path = "/CareerDev" element={<Navigate to="/studentDev" replace />}/>
            <Route path = "/Grad" element={<Navigate to="/studentDev" replace />}/>
            <Route path = "/Tech" element={<Navigate to="/studentDev" replace />}/>
            {/* Define other routes that you need */}
          </Routes>
          <SiteFooter />
        </main>
        <ScrollManager />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
