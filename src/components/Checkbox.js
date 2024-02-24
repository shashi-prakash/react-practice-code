
import React, {useState,useEffect} from "react";


export default function Checkbox() {
const [cricket, setCricket] = useState();
const [chess, setChess] = useState();
const [footbaal, setFootbaal] = useState();
const [tennies, setTennies] = useState(); 
let [totalValue, setTotalvalue] = useState();
const array = [];

    const add = ()=>{
        setTotalvalue([ ...totalValue])
      }
      array.push(totalValue)
// let totalLentgh = totalValue.length;
console.log("Total Selected value",totalValue)
// console.log("Data inside arrray",array)
// console.log("Length of array", totalLentgh)
  return (
    <>
    <div className="text-center bg-danger d-flex p-3 justify-content-around">
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          id="checkboxNoLabel"
          value="cricket"
          onChange={(event) => setCricket(event.target.value)}
        />
        <label htmlFor="">&nbsp;Cricket</label>
      </div>
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          id="checkboxNoLabel"
          value="chess"
          onChange={(event) => setChess(event.target.value)}
        />
         <label htmlFor="">&nbsp;Chess</label>
      </div>
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          id="checkboxNoLabel"
          value="footbaal"
          onChange={(event) => setFootbaal(event.target.value)}
        />
         <label htmlFor="">&nbsp;Football</label>
      </div>
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          id="checkboxNoLabel"
          value="tennies"
          onChange={(event) => setTennies(event.target.value)}
        />
         <label htmlFor="">&nbsp;Tennies</label>
      </div>
      <button on onClick={add}>click</button>
    </div>
    </>
  );
}
