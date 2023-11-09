import React, { useState, useRef } from 'react';

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className='button_text_collapse'>
      <button onClick={toggle} className='button_collapse'>
        {props.label}
        <i className={`fa-solid fa-chevron-${open ? 'down' : 'up'} arrow`} id="rotateIcon"></i>
      </button>
      <div className="content-parent" ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
        <div className="collapse_content">{props.description}</div>
      </div>
    </div>
  );
}

export default Collapsible;





const icon = document.getElementById('rotateIcon');
let isRotated = false;

function toggle() {
  if (!isRotated) {
    icon.style.animation = 'none';
    void icon.offsetWidth; // Force reflow
    icon.style.animation = 'rotate 0.5s';
    isRotated = true;
  } else {
    icon.style.animation = 'none';
    void icon.offsetWidth; // Force reflow
    icon.style.animation = 'rotate 0.5s';
    isRotated = false;
  }
}





