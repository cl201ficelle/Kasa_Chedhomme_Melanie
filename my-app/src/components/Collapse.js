import React from 'react';
import { useEffect, useState } from "react"



const Collapsible =(props)=>{
    const [open, setOpen] = useState(false);
    const toggle = () => {
    setOpen(!open);

  };
    return(
        
        <div className='button_text_collapse'>
         <button onClick={toggle} className='button_collapse'>
  {props.label}
  <i className={`fa-solid fa-chevron-${open ? 'down' : 'up'} arrow`} id="rotateIcon"></i>
</button>
        {open && (
          <div className="text_collapse">
            <p>{props.description}</p>
          </div>
        )}
      
      </div>    
    )
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





