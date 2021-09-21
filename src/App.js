import React, { useEffect } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    </div>
  );
}

export default App;
