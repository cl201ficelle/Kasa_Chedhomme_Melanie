import React from 'react';
import { useEffect, useState } from "react"
// import "../styles/components/Collapse.css"


const Collapsible =(props)=>{
    const [open, setOpen] = useState(false);
    const toggle = () => {
    setOpen(!open);

  };
    return(
        
        <div className='button_text_collapse'>
        <button onClick={toggle} className='button_collapse' >{props.label}<i className={`fa-solid ${open ? "fa-chevron-down" : "fa-chevron-up"}`}></i></button>
        {open && (
          <div className="text_collapse">
            <p>{props.description}</p>
          </div>
        )}
      
      </div>    
    )
}

export default Collapsible;