import React from "react";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";
import Topbar from "../../components/Topbar/Topbar";
import "./home.css"
const home = () => {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed/>
        <RightBar/>
      </div>
    </div>
  );
};

export default home;
