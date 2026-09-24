import React from "react";

/** Dashed box marking content that still needs to be written. */
const Todo = ({ children = "内容待补充", className = "", style }) => (
  <div className={`todo ${className}`} style={style}>
    <span className="todo_tag">待补充</span>
    <span className="todo_text">{children}</span>
  </div>
);

export default Todo;
