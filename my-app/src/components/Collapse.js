import React from 'react';
import { useEffect, useState } from "react"
import "../styles/components/Collapse.css"


const Collapsible =()=>{
    const [open, setOpen] = useState(false);
    const toggle = () => {
    setOpen(!open);

  };
    return(
        
        <div>
        <button onClick={toggle} className='button_collapse' >toggle<i class={`fa-solid ${open ? "fa-chevron-down" : "fa-chevron-up"}`}></i></button>
        {open && (
          <div className="text_collapse">
            <p>toggle</p>
          </div>
        )}
      </div>
          
    )
}

export default Collapsible;