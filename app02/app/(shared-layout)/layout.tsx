import Navbar from "@/components/web/navbar";
import React from "react";

const Sharedlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Sharedlayout;
