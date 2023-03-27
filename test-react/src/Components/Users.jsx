import React, { useEffect, useState } from "react";
import User from "./User";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);
  return (
    <>
      <h1 className="users-title">Users list:</h1>
      <div className="user-list">
        {users.map((user) => (
          <User id={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
