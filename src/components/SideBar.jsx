import React from 'react'
import { useSelector } from 'react-redux';
import NavItem from './NavItem';

function SideBar() {
   const visiblity = useSelector((store) => store.header.sideMenuVisible);
   const style = {
      display: visiblity ? 'block' : 'none'
   }
   return (
      <div
         className="w-60 transition px-2"
         style={style}>
         <NavItem name="Home" />
         <NavItem name="Shorts" />
         <NavItem name="Subscriptions" />
         <NavItem name="Youtube Music" />
         <h2 className='font-bold text-xl'>You</h2>
         <NavItem name="Your Channel" />
         <NavItem name="History" />
         <NavItem name="Playlist" />
         <NavItem name="Your Videos" />
         <NavItem name="Watch Later" />
      </div >
   )
}

export default SideBar;