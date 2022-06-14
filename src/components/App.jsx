import React, { useState } from "react";
import Form from "./Form";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [isRegistered, setIsRegistered] = useState(false);
  let [userName, setUserName] = useState("");
  let [password, setpassword] = useState("");

  return (
    <div className="container">
      {isRegistered ? (
        isLoggedIn ? (
          <h1>Hello, {userName}. </h1>
        ) : (
          <Form isRegistered={isRegistered} setIsLoggedIn={setIsLoggedIn} />
        )
      ) : (
        <Form isRegistered={isRegistered} setRegistered={setIsRegistered} />
      )}
    </div>
  );
}

export default App;
