import React from "react";
import { useGlobalContext } from "../GlobalContext";
import Post from "./Post";

const Posts = () => {
  const { isLoading, posts } = useGlobalContext();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="posts">
      <div className="no-posts">
        <p>No. Of Posts {posts.length}</p>
      </div>
      <div className="post-contaienr">
        {posts?.map((postItem) => (
          <Post key={postItem.objectID} post={postItem} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
