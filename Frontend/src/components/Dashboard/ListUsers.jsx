import React from "react";
import { useNavigate } from "react-router-dom";
export default function ListUsers({ key, username, allUsers }) {
  // console.log("id", id);
  // console.log("All User ", allUsers);
  // console.log("allUsers.id", allUsers._id);
  // console.log("allUsers.firstname", allUsers.firstame);
  const navigate = useNavigate();
  return (
    <div className="px-4   py-2 ">
      <li className=" flex items-center justify-between  py-2">
        <div className="flex items-center">
          <div className="rounded-full bg-black text-white text-xl px-3 py-1.5">
            {username?.[0]}
          </div>
          <p className="pl-1 text-2xl font-sans">{username}</p>
        </div>
        <button
          className="bg-black text-white py-1.5 px-3.5 rounded-lg shadow-md"
          onClick={() =>
            navigate(`/transfer?id=${allUsers._id}&name=${username}`)
          }
        >
          Send Money
        </button>
      </li>
    </div>
  );
}
