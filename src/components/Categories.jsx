import React from 'react';
import categories from '../utils/moc_categories';
import { Link } from 'react-router-dom';

function Categories() {
   return (
      <div className='flex overflow-x-scroll py-5'>
         {categories.map(category => <CategoryItem key={category} name={category} />)}
      </div>
   )
}

export default Categories;


function CategoryItem({ name }) {
   return (
      <Link to="results">
         <span
            className='bg-gray-200 cursor-pointer text-center mr-3 px-4 py-1 border-gray-500 rounded-xl min-w-20'>
            {name}
         </span>
      </Link>
   )
}