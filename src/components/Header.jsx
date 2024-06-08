import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleVisibility } from "../utils/appSlice";

const Header = function () {
   const dispatch = useDispatch();
   function toggleSideBar() {
      dispatch(toggleVisibility("data"),);
   }

   return (
      <nav className="flex flex-row justify-between">
         <div className='flex'>
            <img
               className='h-8'
               onClick={toggleSideBar}
               src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png" />
            <img
               className='h-10'
               src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png" />
         </div>
         <div>
            <input
               className="border border-gray-300"
               type="text"
               placeholder="search" />
            <button className='border border-gray-300 px-3'> SEARCH</button>
         </div>
         <div>
            <span>Profile</span>
         </div>
      </nav>
   );

}

export default Header