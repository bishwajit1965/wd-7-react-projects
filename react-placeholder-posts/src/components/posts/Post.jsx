import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Post = (props) => {
  const { title, body } = props.post;
  return (
    <Col sm={4} md={2} lg={4}>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p id="body-text" className="d-none">
            Body: {textShortener(body, 20)}
          </p>

          <Button id="show-more-btn" className="btn-sm" onClick={toggleView}>
            Read More ...
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
function textShortener(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit) + "...";
  } else {
    return string;
  }
}

function toggleView() {
  const p = document.getElementById("body-text");
  if (p.className === "d-none") {
    p.className = "d-block";
  } else {
    p.className = "d-none";
  }
}

export default Post;
