import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function VideoCard(props) {
   const { publishedAt, title, thumbnails: { maxres: { url = 'default-url' } = {}, }, channelTitle, } = props.video.snippet;
   const { viewCount } = props.video.statistics;
   const { duration } = props.video.contentDetails;

   const visiblity = useSelector((state) => state.header.sideMenuVisible)
   return (
      <Link
         to={`watch?v=${props.video.id}`}
         className={`flex flex-col ${visiblity ? "w-72" : "w-64"}`}>
         <div >
            <img
               className='rounded-xl'
               src={url} alt={title} />
            <span className=''>{duration}</span>
         </div>
         <div className='flex items-start gap-3 py-3'>
            <img
               className='rounded-full w-10'
               src="https://yt3.ggpht.com/wntqEtC54q6jAEzNt1sLuxzefxaXoewn9FkT8JUPoxyGUFCAD8SU7xp_0RnyY3QFFCHsEaNLIfk=s68-c-k-c0x00ffffff-no-rj"
               alt='call' />
            <div>
               <h3 className='line-clamp-2'>{title}</h3>
               <h5>{channelTitle} 🔵</h5>
               <p><span>{viewCount / 10000}M views {publishedAt}</span></p>

            </div>

            <span>l</span>
         </div>
      </Link>

   )
}

export default VideoCard;