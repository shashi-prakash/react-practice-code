import React from 'react'
import TabButtons from './TabButtons';
import TabContent from './TabContent';
import './tab.css';
export default function Tab() {

const petData = [
    {
      animal : 'Cheetah',
      fact : 'Cheetahs are fastest land animals',
      imgPath : './cheetah'
    },
    {
        animal : 'Elephant',
        fact : 'Elephant is a big body land animals',
        imgPath : './elephant'
      },
      {
        animal : 'Cow',
        fact : 'Cow is a land animals',
        imgPath : './cow'
      }
]

  return (
    <>
    <div className="main_content">
        <h1 style={{textAlign:"center"}}>Choose your pet</h1>
        <TabButtons petData={petData}></TabButtons>
        <TabContent petData={petData}></TabContent>
    </div>
    </>
  )
}
