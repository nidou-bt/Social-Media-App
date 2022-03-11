import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
const Post = ({el}) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/image.jpeg"
              alt=""
            />
            <span className="postUsername">nidhal</span>
            <span className="postDate"> 5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey !!!!</span>
          <img className="postImg" src="/assets/person/image.jpeg" alt="" />
          </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <span className="postLikeCounter">32 peoples like it</span>
            </div>
          <div className="postBottomRight">
          <span className="postCommentText">9 commontes</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Post;
