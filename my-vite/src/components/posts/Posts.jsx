import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0, 12)));
  }, []);
  return (
    <>
      <h2 className="text-3xl font-bold">Posts: {users.length}</h2>
      <div className="grid gap-2 md:gap-4 lg:gap-4 xl:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {users.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
