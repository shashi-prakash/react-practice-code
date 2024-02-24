import React, { useState } from "react";

export default function SearchTableData() {
  const [inputValue, setEnputValue] = useState("");

  const data = [
    {
      id: 4,
      name: "Car",
      quantity: 5,
      quality: "Medium",
    },
    {
      id: 2,
      name: "Bus",
      quantity: 2,
      quality: "Good",
    },
    {
      id: 3,
      name: "Cycle",
      quantity: 20,
      quality: "Standard",
    },
    {
      id: 9,
      name: "Auto",
      quantity: 200,
      quality: "Bad",
    },
  ];

 const data1 = {
  id : 1,
  name : "hello"
 };

 let str = JSON.stringify(data1);
 console.log(str);


  const getValue = (e) => {
    setEnputValue(e.target.value.toLowerCase());
  };
  const filteredList = data.filter((fItem) =>
    fItem.name === "" ? fItem : fItem.name.toLowerCase().includes(inputValue)
  );

  return (
    <>
      <input
        type="Search"
        placeholder="Enter value to search"
        onChange={getValue}
      />
      <table style={{ border: "1px solid red" }}>
        <th>S.No.</th>
        <th>Id no</th>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Quality.</th>
        <tbody style={{ border: "1px solid red" }}>
          {filteredList.map((list, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.quantity}</td>
              <td>{list.quality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
