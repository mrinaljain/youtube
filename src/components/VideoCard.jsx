import React from 'react'
import { Link } from 'react-router-dom';

function VideoCard(props) {
   const { publishedAt, title, description, thumbnails: { maxres: { url, width, height }, }, channelTitle, } = props.video.snippet;
   const { viewCount } = props.video.statistics;
   const { duration } = props.video.contentDetails;
   return (
      <Link to={`watch?v=${props.video.id}`}>
         <div className='flex flex-col w-72'>
            <img
               className='rounded-xl'
               src={url} alt="" />
            <div className='flex items-start gap-3 py-3'>
               <img
                  className='rounded-full w-10'
                  src="https://yt3.ggpht.com/wntqEtC54q6jAEzNt1sLuxzefxaXoewn9FkT8JUPoxyGUFCAD8SU7xp_0RnyY3QFFCHsEaNLIfk=s68-c-k-c0x00ffffff-no-rj" />
               <div>
                  <h3 className='line-clamp-2'>{title}</h3>
                  <h5>{channelTitle} 🔵</h5>
                  <p><span>{viewCount / 10000}M views {publishedAt}</span></p>
               </div>
               <span>l</span>
            </div>
         </div>
      </Link >
   )
}

export default VideoCard;