import React from "react";
import Header from "../Header/Header";
import UsersList from "./UsersList";

export default function Dashboard({ balence, users, username }) {
  return (
    <div>
      <Header username={username} />
      <div className="py-4 px-6 ">
        <h1 className="text-4xl font-medium  pb-3">Your balence ${balence}</h1>
        <h1 className="text-4xl font-medium py-3">{username}</h1>
      </div>
      <UsersList users={users} />
    </div>
  );
}
