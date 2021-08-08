import React, { useEffect } from "react";
import Main from "./components/MainComponent";
import "font-awesome/css/font-awesome.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
