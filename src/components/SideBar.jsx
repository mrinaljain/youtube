import React from 'react'
import { useSelector } from 'react-redux';

function SideBar() {
   const visiblity = useSelector((store) => store.header.sideMenuVisible);
   const style = {
      display: visiblity ? 'none' : 'block'
   }
   return (
      <div
         className="w-52 transition"
         style={style}> SideBar</div >
   )
}

export default SideBar;