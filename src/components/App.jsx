import React, { useState } from "react";
import Form from "./Form";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [isRegistered, setIsRegistered] = useState(false);
  let [userName, setUserName] = useState("");
  let [password, setpassword] = useState("");

  return (
    <div className="container">
      {isRegistered}
      {isLoggedIn ? (
        <h1>Hello, {userName}. </h1>
      ) : (
        <Form isRegistered={isRegistered} />
      )}
    </div>
  );
}

export default App;
