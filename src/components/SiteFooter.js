import React from "react";

const SiteFooter = () => (
  <footer className="site_footer">
    <div className="container footer_top">
      <div>
        <p className="footer_name">UIUC CSSA</p>
        <p className="footer_sub">伊利诺伊大学香槟分校中国学生学者联合会</p>
      </div>
      <div className="footer_contact">
        <span className="footer_email">cssa@illinois.edu</span>
        <span>微信公众号 UIUCCSSA · 小红书 UIUC_CSSA</span>
        <span className="footer_links">
          <a href="https://www.instagram.com/uiuc_cssa/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/uiuccssa/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </span>
      </div>
    </div>
    <div className="container footer_bottom">
      <span>© {new Date().getFullYear()} UIUC CSSA</span>
      <span>Champaign, Illinois</span>
    </div>
  </footer>
);

export default SiteFooter;
