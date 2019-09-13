import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);

  // fetching all the posts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res);
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // [] to fetch only one time

  return (
    <div>
      <div>
        {posts.map(post => (
          <li key={post.id}>
            <h2 className="post-titles">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default DataFetching;
