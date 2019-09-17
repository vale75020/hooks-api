import React, { useState, useEffect } from "react";
import axios from "axios";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)
  const [toggle, setToggle] = useState(false)

  // fetching a post by id
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },[idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id)
    setToggle(true)
    console.log("id", id)
  }

  const deletePost = () => {
    setId("")
    setToggle(false)
  }
  
  return (
    <div className="post">
        <h2>Search a post by ID</h2>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      {(toggle && id!=="") ? <div className="container">
        <h2 id="post-title">{post.title}</h2>
        <p>{post.body}</p>
        <button className="delete" onClick={deletePost}>Delete</button>
        <br /><br />
      </div>
      : null}
    </div>
    
  );
};

export default SinglePost;