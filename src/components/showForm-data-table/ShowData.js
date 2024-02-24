import React, { useState } from 'react'

export default function ShowData() {
  const [formData, setFormData] = useState([])
const [getValue, setValue] = useState({
  username : '',
  email : '',
})

const inputValue = (e) =>{
  setValue({...getValue, [e.target.name]:e.target.value})
}

const submitFormData = () => {

    console.log(getValue)
    setFormData([...formData,getValue])
    clearval();
  }


function clearval(){
  setValue({
    username: '',
    email : ''
  })
}
  return (
    <>
    <input type="text" placeholder='Name' name="username" value={getValue.username} onChange={inputValue} /> <br />
    <input type="email" placeholder='email'  name="email" value={getValue.email} onChange={inputValue} /> <br />
    <button type='button' onClick={submitFormData}>Submit</button>


    <table>
      <tr>
        <th>id</th>
        <th>User Name</th>
        <th>Email</th>
      </tr>
      <tbody>
       {formData.map((item, index)=>(
       <tr key={index}>
        <td>{++index}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
       </tr>
       
       ))}
      </tbody>
    </table>
    
    </>
  )
}
