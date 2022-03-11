import React from "react";
import "./rightbar.css";
const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b>
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/image.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnLine"></span>
              </div>
              <span className="rightbarUserName">john carter</span>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
