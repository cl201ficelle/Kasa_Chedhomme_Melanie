import React, { useState, useRef } from "react";

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="button_text_collapse">
      <button className="button_collapse" onClick={toggle}>
        {props.label}
        <i
          className={`fa-solid fa-chevron-up ${open ? "rotated" : ""}`}
          id="rotateIcon"
        ></i>
      </button>
      <div
        className="content-parent"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="collapse_content">{props.description}</div>
      </div>
    </div>
  );
};

export default Collapsible;
