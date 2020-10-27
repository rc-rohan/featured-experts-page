import React from "react";
import DummyImage from "../dummyImage.jpg";

function Cards() {
  return (
    <div className="card">
      {/* move this bottom */}
      {/* <hr /> */}
      <div className="profile-secondaryData">
        <div className="profile__picture">
          <img src={DummyImage} alt="" />
        </div>
        <small className="price">Price: </small>
        <strong className="price__value">Free</strong>
        <div className="rating">
          <i className="icons bx bxs-star"></i>
          <small className="rating__value">4.9</small>
          <small className="rating__total">(120)</small>
        </div>
      </div>
      <div className="profile-primaryData">
        <div className="profile__header-detials">
          <div >
            <strong className="profile__name">David Melvik</strong>
            <strong className="profile__designation">
              Founder @ The Mellinials & Ceo @ABC
            </strong>
          </div>
          <div className="profile__buttons">
            <i className="icons bx bx-heart"></i>
            <button className="btn ">View Profile</button>
          </div>
        </div>
        <div>
          <div className="langauage-location-details">
            <span className="session-available">
              <i className="icons bx bx-time-five"></i>
              <p>2 free Sessions available</p>
            </span>
            <span className="location-available">
              <i className="icons bx bxs-location-plus"></i>
              <p>Tampa LA,USA</p>
            </span>
            <span className="language-available">
              <i className="icons bx bx-text"></i>
              <p>Geek, English, French</p>
            </span>
          </div>
          <p className="profile-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            asperiores aperiam nobis quasi provident quia a repellat repudiandae
            perferendis veniam et, laboriosam debitis doloremque voluptates
            error incidunt id repellendus consequuntur nihil consectetur fugiat.
            Vero voluptatum vel laborum consequatur consequuntur alias!
          </p>
          <div className="profile__tags">
            <strong>Marketing</strong>
            <strong>SEO</strong>
            <strong>Content Marketing</strong>
            <strong>Marketing Automation</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
