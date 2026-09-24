import React from "react";

/** Standard page heading: title, optional English name and lead. */
const PageHeader = ({ title, en, lead, children }) => (
  <header className="page_header">
    <div className="container">
      <h1 className="page_title">{title}</h1>
      {en && <p className="page_en">{en}</p>}
      {lead && <p className="page_lead">{lead}</p>}
      {children}
    </div>
  </header>
);

export default PageHeader;
