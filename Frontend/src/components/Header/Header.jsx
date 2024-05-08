import React from "react";
import style from "./Header.module.css";
export default function Header({ username }) {
  return (
    <div
      className=" h-20  flex justify-between items-center px-5 border border-black-500"
    >
      <div>
        <h1 className="text-3xl font-mono font-medium">Payment Bank</h1>
      </div>
      <div className="flex items-center ">
        <div className="py-1.5 px-4 rounded-full bg-black text-white text-2xl">{username?.[0]}</div>
        <p className="pl-1.5 font-medium text-2xl"> Hello , {username}</p>
      </div>
    </div>
  );
}
