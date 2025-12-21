import React from "react";
import Hello from "./components/Hello";

const page = () => {
  console.log("What type of a component am I");
  return (
    <div>
      Welcome to next.js
      <Hello />
    </div>
  );
};

export default page;
