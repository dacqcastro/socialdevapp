import React, { useEffect, useState } from "react";
import Caption from "./Caption";
import axios from "axios";

const Captions = ({ user }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tweets")
      .then(res => {
        setTweets(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="captions">
      <div className="container">
        {tweets.map(tweet => (
          <Caption
            key={tweet._id}
            postId={tweet._id}
            createdBy={tweet.user}
            body={tweet.body}
            likes={tweet.likes}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default Captions;
