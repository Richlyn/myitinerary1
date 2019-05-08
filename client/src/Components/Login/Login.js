import React, { Component } from "react";
import LoginImg from "../../Assets/login_.png";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div>
        <img src={LoginImg} className="LoginImg" alt="Login" />
      </div>
    );
  }
}
export default Login;
