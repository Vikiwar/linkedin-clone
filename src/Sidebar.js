import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const { email, displayName, profileUrl } = user;
  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={"https://i.postimg.cc/T3Fy53PS/img2.jpg"} alt="" />
        <Avatar className="sidebar__avatar" src={profileUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{displayName}</h2>
        <h4>{email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat ">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,389</p>
        </div>
        <div className="sidebar__stat ">
          <p>views on post</p>
          <p className="sidebar__statNumber">1,389</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("React.Js")}
        {recentItems("javascript")}
        {recentItems("softwareengineering")}
        {recentItems("Design")}
        {recentItems("Developer")}
      </div>
    </div>
  );
}

export default Sidebar;
