import React from "react";

import "./User.css";
const User = (props) => {
  const { company, address, email, id, name, phone } = props.user;
  return (
    <div className="user">
      <h1>Id: {id}</h1>
      <h1>User :{name}</h1>
      <h5>Bs: {company.bs}</h5>
      <h5>Catch-phrase: {company.catchPhrase}</h5>
      <h5>Company name: {company.name}</h5>
      <p>City :{address.city}</p>
      <p>Email :{email}</p>
      <p>Phone :{phone}</p>
    </div>
  );
};

export default User;
