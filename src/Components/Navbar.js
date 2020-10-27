import React from "react";
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
          <span className="slide show-selected"></span>
        </ul>
      </nav>

      <div className="dropdowns">
        <i className="icons bx bx-bell"></i>
        <i className="icons bx bx-message-detail"></i>
        <div className="profile__picture">
          <div className="image-area">
            <img className="user__profile-pic" src={profilePic} alt="" />
          </div>
        </div>
        <i className="icons bx bxs-chevron-down icons"></i>
      </div>
    </header>
  );
};

export default Navbar;
