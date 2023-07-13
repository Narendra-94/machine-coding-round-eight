import React from "react";
import logo from "../../images/meetup.png";
import { Search } from "../Search/Search";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <Search />
    </div>
  );
};
