import React from "react";
import Logo from "../../../img/logo.png";
import "./Logosearch.css";
import { UilSearch } from '@iconscout/react-unicons';
const Logosearch = () => {
  return (
    <div className="Logosearch">
      <img src={Logo} alt="Logo" className="logo"/>
      <div className="Search">

        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
}

export default Logosearch;
