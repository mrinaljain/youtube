const API_KEY = "AIzaSyA4ZY_EN6ljE3uj2iPDKmq3k03Ru7aXTl0";

export const GET_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=" +
  API_KEY;
