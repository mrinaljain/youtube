import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleVisibility } from "../utils/appSlice";
import Search from './Search';

const Header = function () {

   const dispatch = useDispatch();
   function toggleSideBar() {
      dispatch(toggleVisibility("data"),);
   }
   return (
      <nav className="flex justify-between items-center px-4 py-2">
         <div className='flex items-center'>
            <img
               className='h-6 cursor-pointer'
               onClick={toggleSideBar}
               src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
               alt='menu' />
            <img
               className='h-6 cursor-pointer ml-4'
               src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
               alt='header' />
         </div>

         <div className='flex'>
            <Search />
            <button className='rounded-full bg-grey px-1 ml-4 border border-gray-400'>🎙</button>
         </div>
         <div className='flex'>
            <button className=''>🎙</button>
            <button className='ml-8'>🔔</button>
            <img
               className='rounded-full h-7 ml-8'
               src='https://yt3.ggpht.com/BoFtT9SCYdYD7Gl-m-4LN3Ddy_cqadm0KsFPHgjAQUhcS0QqkJ0RAKygm2taf3urW_7JKPtBJA=s88-c-k-c0x00ffffff-no-rj'
               alt='profile' />


         </div>
      </nav>
   );

}

export default Header