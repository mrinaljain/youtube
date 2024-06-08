import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <>
        <Header />
        <Home />
        <Footer />
      </>
    </Provider>
  );
}

export default App;
