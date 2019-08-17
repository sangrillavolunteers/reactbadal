import React, { Component } from "react";
import "../../styles/Header.css";
import Logo from "./Logo";
class Header extends Component {
  render() {
    return (
      <div class="header-container">
        <header>
          <span class="title">Title</span>
        </header>
        <Logo />
      </div>
    );
  }
}
export default Header;
