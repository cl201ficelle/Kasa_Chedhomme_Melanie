import React, { useState, useRef } from "react";

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="btn_and_text_collapse">
      <button className="btn_collapse" onClick={toggle}>
        {props.label}
        <i
          className={`fa-solid fa-chevron-up ${open ? "rotated" : ""}`}
          id="rotateIcon"
        ></i>
      </button>
      <div
        className="collapse_content_parent"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="collapse_content_text">{props.description}</div>
      </div>
    </div>
  );
};

export default Collapsible;
