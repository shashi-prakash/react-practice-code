import React, { useState } from 'react'

export default function TabContent({petData}) {

  const [ativeTab, setActiveTab] = useState(0);

  return (
    <>
    <div className="tab_container">
        <div className="tab_content">
            {
                petData.map((item, index)=>(
                    <div key={index}>
                        <p>{item.animal}</p>
                        <h6>{item.fact}</h6>
                    </div>
                ))
            }
        </div>
    </div>
    
    </>
  )
}
