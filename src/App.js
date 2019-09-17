import React from "react";
import DataFetching from "./components/DataFetching";
import "./App.css";
import SinglePost from "./components/SinglePost";
import SinglePostByUser from "./components/SinglePostByUser";

function App() {
  return (
    <div className="App">
      <h1>Posts App</h1>
      <SinglePost />
      <SinglePostByUser />
      <DataFetching />
    </div>
  );
}

export default App;
