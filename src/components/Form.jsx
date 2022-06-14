import React from "react";
import Input from "./Input";

export default function Form(props) {
  function onClick() {
    if (props.isRegistered) {
      return props.setIsLoggedIn(true);
    } else {
      return props.setRegistered(true);
    }
  }
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit" onClick={onClick}>
        {" "}
        {props.isRegistered ? "Login" : "Register"}{" "}
      </button>
    </form>
  );
}
