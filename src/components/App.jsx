import React, { useState } from "react";
import Login from "./Login";

function App() {
  let [isLoggenIn, setIsLoggenIn] = useState(false);
  return (
    <div className="container">
      <h1>Hello </h1>
      <Login />
    </div>
  );
}

export default App;
