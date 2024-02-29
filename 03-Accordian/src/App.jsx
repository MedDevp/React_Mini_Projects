import React from 'react'
import { accordionData } from './Constant/content'
import Accordion from './Component/Accordion'

const App = () => {
  return (
    <>
      {accordionData.map(({title , content },index)=>(     
            <Accordion title={title} content={content} key={index}/>
        ))}
    </>
  )
}

export default App