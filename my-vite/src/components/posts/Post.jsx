import React, { useState } from "react";

const Post = (props) => {
  const [isActive, setIsActive] = useState(false);
  const textShortener = (string, limit) => {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    } else {
      return string;
    }
  };
  const { title, body } = props.post;
  return (
    <>
      <div className="card">
        <h2 className=" font-bold">Title: {title}</h2>
        <p>
          {isActive ? (
            <p>Body: {body}</p>
          ) : (
            <p>Body: {textShortener(body, 55)}</p>
          )}
          {isActive ? (
            <button className="btn-warning" onClick={() => setIsActive(false)}>
              Show less
            </button>
          ) : (
            <button className="btn-blue" onClick={() => setIsActive(true)}>
              Show more
            </button>
          )}
        </p>
        {/* <div className="btn">Submit</div> */}
      </div>
    </>
  );
};

export default Post;
