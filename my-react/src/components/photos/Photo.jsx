import React from "react";
import Col from "react-bootstrap/Col";
import { Button, Card } from "react-bootstrap";
import Helpers from "../../Helpers";

const Photo = (props) => {
  const { id, albumId, thumbnailUrl, title, url } = props.photo;
  return (
    <Col sm={3} xs={12} md={2} lg={3}>
      <Card className="mb-3 h-95">
        <Card.Img variant="top" src={thumbnailUrl} />
        <Card.Body>
          <Card.Title>Title:{Helpers(title, 20)}</Card.Title>
          <Card.Text>
            <h5>Id: {id}</h5>
            <h5>Album Id: {albumId}</h5>
            <h5>Url: {url}</h5>
          </Card.Text>
          <Button variant="primary" className="btn-sm">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Photo;
