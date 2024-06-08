import React from "react";
import SideBar from "../components/SideBar";
import Body from "../components/Body";
export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <Body />
    </div>
  );
}
