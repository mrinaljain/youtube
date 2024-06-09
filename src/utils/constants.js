const API_KEY = "AIzaSyA4ZY_EN6ljE3uj2iPDKmq3k03Ru7aXTl0";

export const GET_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" +
  API_KEY;

  export const YOUTUBE_SEARCH =
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  export const YOUTUBE_SEARCH_RESULT =
    "https://www.youtube.com/youtubei/v1/search?prettyPrint=false";
