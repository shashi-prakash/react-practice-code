import React, { useState } from 'react'
import axios from 'axios';
export default function Search() {
    const [pockmon, setPockmon] = useState('');
const searchData = () =>{
axios.get(`https://pokeapi.co/api/v2/pokemon/${pockeMonName}`).then((response)=>{
    console.log(response)
})
}


  return (
   <>
   <h1>Pckmon Stats</h1>
   <input type="text" onChange={(e)=>setPockmon(e.target.value)}/>
   <button onClick={searchData}>Search</button>
   </>
  )
}
