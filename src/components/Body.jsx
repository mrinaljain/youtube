import React from 'react'
import Categories from './Categories';
import VideoContainer from './VideoContainer';

function Body() {
   return (
      <div className='w-full'>
         <Categories />
         <VideoContainer />
      </div>
   )
}

export default Body;