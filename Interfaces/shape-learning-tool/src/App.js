import React from "react";

import HeaderImg from "./components/header";
import NavigationBar from "./components/navigationBar";
import HomeInfo from "./components/homeInfo";

/**
 * App returns the relevant components. (First Page that is seen by the user)
 * 
 * @returns the header, navbar, home info
 */
function App() {
  return (
    <div className="App">
      <HeaderImg />
      <NavigationBar />
      <br />
      <HomeInfo />
    </div>
  );
}

export default App;
