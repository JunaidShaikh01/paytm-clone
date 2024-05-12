import React, { useCallback } from "react";
import style from "./Signin.module.css";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function Signin() {
  const [formData, setFromData] = useState({ username: "", password: "" });

  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
  return (
    <div
      className={`${style.bgCustomBackground} w-screen h-screen flex justify-center items-center`}
    >
      <div className="bg-white  e flex flex-col justify-center py-4 px-8 rounded-xl shadow-2xl">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-medium mb-3">Signin</h1>
          <p className="text-color mb-5">Enter Your cradentials for login</p>
        </div>
        <Form
          method="post"
          action="/"
          className="flex justify-center items-start flex-col "
        >
          <label
            htmlFor="username"
            className="font-medium text-base mb-2 shadow-sm"
          >
            Username
          </label>
          <input
            required
            name="username"
            placeholder="johndeo@gmail.com"
            type="email"
            value={formData.username}
            onChange={changeHandler}
            className={`rounded-lg py-2 px-3 text-lg w-full shadow ${style.textColor} ${style.inputBorder}`}
          />
          <label
            htmlFor="password"
            className="font-medium text-base mb-2 shadow-sm"
          >
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={changeHandler}
            className={`rounded-lg py-2 px-3 text-lg w-full shadow ${style.textColor} ${style.inputBorder}`}
          />
          <button className="w-full bg-black text-white rounded-lg shadow-md mt-2 py-2 text-xl cursor-pointer">
            Login
          </button>
        </Form>
        <p className="mt-1">
          Don,t have an account ? <Link to="/signup">Singnup</Link>
        </p>
      </div>
    </div>
  );
}
