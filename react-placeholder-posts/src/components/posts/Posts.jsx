import React, { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 18)));
  }, []);
  return (
    <Container>
      <p>{posts.length}</p>
      <Row>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
