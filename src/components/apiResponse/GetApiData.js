import React from "react";
import FetchApiHooks from "../customHooks/FetchApiHooks";
export default function GetApiData() {
  const { data, isLoading } = FetchApiHooks(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  if (isLoading) return <h1 style={{ textAlign: "center" }}>Loading....</h1>;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to custom hooks</h1>
      <p>{data?.title}</p>
      <p>{data?.body}</p>
    </>
  );
}
