import React, { useState } from "react";
import axios from "axios";

const CreateCaptions = () => {
  const [post, setPost] = useState({
    body: "",
    user: ""
  });

  const submitForm = e => {
    e.preventDefault();

    const token = localStorage.getItem("auth-token");

    axios
      .post(
        "/api/tweets",
        {
          body: post.body,
          user: post.user
        },
        { headers: { "auth-token": `${token}` } }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const formChange = e => {
    setPost({
      ...post,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="CreateCaptions">
      <div className="container">
        <form onSubmit={submitForm}>
          <label htmlFor="body">What's on your mind?</label>
          <textarea
            name="body"
            id="body"
            rows="10"
            cols="60"
            value={post.body}
            onChange={formChange}
          />
          <input id="btn" type="submit" value="Post" />
        </form>
      </div>
    </div>
  );
};

export default CreateCaptions;
