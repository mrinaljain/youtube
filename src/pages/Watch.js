import React from "react";
import { useSearchParams } from "react-router-dom";
function Watch() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MyuRWDnPssc?si=bjvX9ONf0Akd5DWg?autoplay=1"
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
