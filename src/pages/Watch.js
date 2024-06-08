import React from "react";
import { useSearchParams } from "react-router-dom";
function Watch() {
  const [searchParams] = useSearchParams();

  console.log(searchParams);
  const videoId = searchParams.get("v");
  console.log("videoID", videoId);
  return (
    <div>
      <iframe
        width="1060"
        height="615"
        src={`https://www.youtube.com/embed/${videoId}?si=bjvX9ONf0Akd5DWg?autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Watch;
