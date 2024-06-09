import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";

import Comments from "../components/Comments";
import LiveChat from "../components/LiveChat";

function Watch() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-1 w-full">
      <div className="col-span-3">
        <iframe
          width="1000"
          height="600"
          className="rounded-md mx-auto"
          src={`https://www.youtube.com/embed/${videoId}?si=bjvX9ONf0Akd5DWg?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <h1 className="font-extrabold">
          Pakistan के विरुद्ध India का 4-pacer formula है ideal: Zaheer Khan
        </h1>
        <div className="flex items-center">
          <img
            className="rounded-full"
            src="https://yt3.ggpht.com/hLk6XiFWfPdqlR6EDhNYmAuEjZ1YX2W7lMiGpg_WOxLNzS7_s6yypAp41BcGFk49VMS_-CeBi5o=s48-c-k-c0x00ffffff-no-rj"
          />
          <div className="pl-3">
            <h2>Cricbuzz</h2>
            <p>179K Subscribers</p>
          </div>
          <button className="border border-black rounded-full px-3 py-1 bg-black text-white ml-2">
            Subscribe
          </button>
        </div>

        <div className="bg-gray-100 rounded-md p-3">
          <p>
            HUSN Mashup 2.0 | Jay Guldekar | Anuv Jain | Aise Kyun | Choo Lo
          </p>
        </div>
        <Comments />
      </div>
      <div className="col-span-1 p-3">
        <LiveChat />
      </div>
    </div>
  );
}

export default Watch;
