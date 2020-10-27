import React from "react";
import "boxicons";
import profilePic from "../dummyImage.jpg";

const Navbar = () => {


  
  return (
    <header className="header">
      <div className="logo">
        <span className="logo__symbol"></span>
        <h2 className="logo__name">Logo</h2>
      </div>
      <nav className="navigation-links">
        <ul>
          <li>Dashboard</li>
          <li className="selected">Find Experts</li>
          <li>Discussion</li>
        <span className='slide show-selected'></span>
        </ul>
      </nav>

      <div className="dropdowns">
        <box-icon name="bell" className="icons" color="#f38454"></box-icon>
        <box-icon
          name="message-detail"
          className="icons"
          color="#f38454"
        ></box-icon>
        <div className="profile__picture">
          <div className="image-area">
            <img className="user__profile-pic" src={profilePic} alt="" />
          </div>
        </div>
        <box-icon
          name="chevron-down"
          className="icons"
          color="#f38454"
        ></box-icon>
      </div>
    </header>
  );
};

export default Navbar;
