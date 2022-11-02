import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(({ name, description, photoUrl, message }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption title={"like"} color="gray" Icon={ThumbUpOffAltIcon} />
        <InputOption title={"comment"} color="gray" Icon={ChatIcon} />
        <InputOption title={"share"} color="gray" Icon={ShareIcon} />
        <InputOption title={"send"} color="gray" Icon={SendIcon} />
      </div>
    </div>
  );
});

export default Post;
