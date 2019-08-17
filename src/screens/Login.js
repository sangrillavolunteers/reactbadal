import React, { Component } from "react";
import "../styles/Login.css";
import Card from "../components/Card/Card";
class Login extends Component {
  render() {
    return (
      <div id="content">
        <div className="login-background" />
        <Card />
      </div>
    );
  }
}
export default Login;
