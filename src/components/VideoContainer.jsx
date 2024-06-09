import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard';
import { GET_POPULAR_VIDEOS } from '../utils/constants';

function VideoContainer() {
   const [popularVideos, setPopularVideos] = useState([]);

   const fetchVideos = async () => {
      const response = await fetch(GET_POPULAR_VIDEOS);
      const data = await response.json();
      console.log(data);
      setPopularVideos(data.items)
   }
   useEffect(() => {
      fetchVideos()
      return () => {
         console.log("Video Container Unmounted");
      }
   }, [])

   return (
      <div className='flex flex-wrap gap-4 justify-center'>
         {popularVideos.map(video => <VideoCard key={video.id} video={video} />)}
      </div>
   )
}

export default VideoContainer;