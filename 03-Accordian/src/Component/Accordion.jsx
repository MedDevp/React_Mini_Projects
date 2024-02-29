import React from 'react'
import { useState } from 'react'

const Accordion = ({title, content}) => {

    const [isActive, setIsActive] = useState(false);

  return (
    <div className='accordion-card'>
        <div className='header' onClick={()=>setIsActive(!isActive)}>
            <div>{title}</div>
            <p className='icon'>{isActive ? "-" : '+'}</p>
        </div>
        <div>
            {isActive && <div className='card-info'>{content}</div>}
        </div>
    </div>
  )
}

export default Accordion