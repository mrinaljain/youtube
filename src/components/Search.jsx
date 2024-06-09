import React, { useEffect, useState, useRef } from 'react'
import { YOUTUBE_SEARCH } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCache } from '../utils/searchSlice';

function Search() {
   const [searchQuerry, setSearchQuerry] = useState("");
   const [searchSuggestions, setsearchSuggestions] = useState([]);
   const [suggestionBoxVisibility, setsuggestionBoxVisibility] = useState(false)
   const inputRef = useRef(null);
   const dispatch = useDispatch();
   const cache = useSelector((state) => state.search);

   const getSearchSuggestions = async () => {
      console.log("Search API Called " + searchQuerry);
      const response = await fetch(YOUTUBE_SEARCH + searchQuerry);
      const data = await response.json();
      dispatch(updateCache({
         [searchQuerry]: data[1]
      }));
      setsearchSuggestions(data[1]);
   }
   // Debouncing in React
   useEffect(() => {
      let timeOut;
      console.log("cache", cache[searchQuerry]);
      if (cache[searchQuerry]) {
         //return from cache
         console.log("Result found in cache");
         setsearchSuggestions(cache[searchQuerry]);
      } else {
         // api call ki process
         timeOut = setTimeout(() => {
            getSearchSuggestions();
         }, 2000);
      }

      return () => {
         clearTimeout(timeOut);
         console.log("Search component rerendered TimeOut Cleared");
      }
   }, [searchQuerry]);

   function handelChange(e) {
      setSearchQuerry(e.target.value);
   }
   function handleFocus(e) {
      setsuggestionBoxVisibility(true)
   }
   function handleBlur(e) {
      setsuggestionBoxVisibility(false)
   }
   return (
      <div className='relative'>
         <input
            ref={inputRef}
            className="border border-gray-300 rounded-l-full px-2 w-72 "
            type="text"
            placeholder="Search"
            value={searchQuerry}
            onChange={handelChange}
            onFocus={handleFocus}
            onBlur={handleBlur} />
         <button className='border border-gray-300 px-3 rounded-r-full'> 🔍 </button>

         {suggestionBoxVisibility && searchSuggestions?.length > 0 &&
            <div className='w-full h-auto bg-white border border-gray-200 absolute rounded-md'>
               {searchSuggestions.map((item, index) => {
                  return <Link
                     to={`results?search_query=${item}`}
                     key={index}
                     className='w-full block hover:bg-gray-200 py-1 px-2'>
                     {item}
                  </Link>
               })}

         </div>}
      </div>
   )
}

export default Search;

// creating  memoise like caching for search
// create reducer to update the cache 
// use selector to check value of cache
// update api logic based on the cache availability