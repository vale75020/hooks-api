import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SinglePostByUser = () => {
    const [postsByUserId, setPostsByUserId] = useState([])
    const [userId, setUserId] = useState("")
    const [userIdFromButtonClick, setUserIdFromButtonClick] = useState(1)
  const [toggle, setToggle] = useState(false)
  

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => {
        console.log(res);
        setPostsByUserId(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userIdFromButtonClick]);

  const handleClick = () => {
    setUserIdFromButtonClick(userId)
    setToggle(true)
    console.log("userId", userId)
  }

  const deletePost = () => {
    setUserId("")
    setToggle(false)
  }
    
    return (
        <div className="post">
            <h3>Search post by UserID</h3>
            <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Posts By UserID</button>
            {(toggle && userId!=="") ? <div>
             {postsByUserId.map(post => (
                <div className="container" key={post.id}>
        <h2 id="post-title">{post.title}</h2>
        <p>{post.body}</p> 
        </div>
        ))}
         <button onClick={deletePost}>Delete</button>
      </div>
      : null}
        </div>
    );
};

export default SinglePostByUser;