import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FetchApiHooks(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const api = async () => {
    setLoading(true);
    try {
      let response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
      } else {
        alert("Getting error");
        setLoading(false);
      }
    } catch (error) {
      alert("Getting some error", error);
      setLoading(false);
    }
  };
  useEffect(()=>{
    api();
  },[url]);
  return {data, isLoading};
  return <></>;
}
