import React from "react";

export default function ListUsers({ key, allUsers, username }) {
  return (
    <div className="px-4   py-2 ">
      <li className=" flex items-center justify-between  py-2">
        <div className="flex items-center">
          <div className="rounded-full bg-black text-white text-xl px-3 py-1.5">
            {username?.[0]}
          </div>
          <p className="pl-1 text-2xl font-sans">{username}</p>
        </div>
        <button className="bg-black text-white py-1.5 px-3.5 rounded-lg shadow-md">
          Send Money
        </button>
      </li>
    </div>
  );
}
