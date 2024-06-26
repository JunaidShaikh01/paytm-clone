import React from "react";
import ListUsers from "./ListUsers";

export default function UsersList({ users }) {
  return (
    <ul className=" h-screen">
      {users?.map((user, index) => (
        <ListUsers
          username={user.firstname}
          allUsers={user}
          key={index}
          id={user._id}
        />
      ))}
    </ul>
  );
}
