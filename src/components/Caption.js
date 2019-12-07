import React, { useState, useEffect } from "react";
import axios from "axios";

const Caption = ({ postId, body, likes, user, createdBy }) => {
  const [like, setLike] = useState(likes.length);

  let likedOrNo = true;

  //go over all the likes and see if it was created by the same person;

  likes.map(like => {
    if (like === user) {
      return (likedOrNo = true);
    } else {
      return (likedOrNo = false);
    }
  });

  console.log(`post: ${postId}`);
  console.log(`user: ${user}`);

  useEffect(() => {}, []);

  const addLikes = () => {
    setLike(like + 1);
  };

  const removeLikes = () => {
    setLike(like - 1);
  };

  const likeClick = () => {
    const token = localStorage.getItem("auth-token");
    axios
      .put(
        `/api/like/${postId}`,
        {},
        {
          headers: { "auth-token": `${token}` }
        }
      )
      .then(res => {
        if (res.data.msg === "Liked") addLikes();
        else removeLikes();
        console.log(res.data.msg);
      })
      .catch(err => console.log(err));
    window.location.reload(true);
  };

  return (
    <div className="caption">
      <div className="firstHalf">
        <div className="pic">
          <img src="https://i.ibb.co/ChMZYbv/guest.png" alt="user" />
        </div>
      </div>
      <div className="secondHalf">
        <div className="user">
          <h3>Diego</h3>
        </div>
        <div className="content">
          <p>{body}</p>
        </div>
        <div className="info">
          <div onClick={likeClick} className="likes">
            {likedOrNo ? (
              <i className="far fa-heart"></i>
            ) : (
              <i className="fas fa-heart"></i>
            )}
            <p>{like}</p>
          </div>
          <p className="timeStamp">10 secs ago</p>
        </div>
      </div>
    </div>
  );
};

export default Caption;
