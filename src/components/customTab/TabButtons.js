import React from 'react'

export default function TabButtons({petData}) {
  return (
    <>
    <div className="tab_header">
        {
            petData.map((item, index) =>(
                <li className={`tab_button`} key={index}>{item.animal}</li>
            ))
        }
    </div>
    </>
  )
}
