import React from 'react'

function NavItem({ name }) {
   return (
      <div className='px-4 py-1 hover:bg-gray-200 cursor-pointer rounded-md'>{name}</div>
   )
}

export default NavItem