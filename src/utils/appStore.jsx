import { configureStore } from "@reduxjs/toolkit"
import headerReducer from "./appSlice"
import searchReducer from "./searchSlice"
const appStore = configureStore(
   {
      reducer: {
         header: headerReducer,
         search: searchReducer
      }
   }
);

export default appStore;