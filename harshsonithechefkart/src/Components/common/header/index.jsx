  import React from 'react';
  import "./header.css";

  const Header = () => {
    return (
      <div className='header max-width'>
        <img
          src='https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Logo_black_0c2ca67725.webp'
          alt="logo"
          className='header-logo' />
        <div className="header-right">
          <div className="header-calendar-time-container">
            <div className="calendar-wrapper">
              <div className="calendar-icon-name">
                <i className="fa-solid fa-calendar-days absolute-center calendar-icon"></i>
                <div>
                  <strong>21 January 2023</strong>
                </div>
              </div>
            </div>
            <div className="calendar-time-separator"></div>
            <div className="time-icon-name">
              <i className="fa-solid fa-stopwatch absolute-center time-icon"></i>
              <div className='cur-po'><strong>08:88 AM - 12:30 AM</strong></div>
            </div>
          </div>
          <div className="contact-btn btn">Contact Us</div>
          <div className="profile-wrapper">
            <img
              src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/burger_icon_33cb06d073.svg"
              alt="menu"
              className='header-profile-image' />
            <span className="header-username">Soni</span>
            <i className="fa-solid fa-angle-down profile-drop-down cur-po"></i>
          </div>
        </div>
      </div>
    )
  }

  export default Header;