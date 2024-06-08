import { Provider } from "react-redux";
import "./App.css";
import appStore from "./utils/appStore";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  );
}

export default App;


