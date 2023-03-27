import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 20)));
  }, []);
  return (
    <>
      <h1>Photo album:{photos.length}</h1>
      <Container>
        <Row>
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Photos;
