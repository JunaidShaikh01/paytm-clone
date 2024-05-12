import React from "react";
import { Form, Link } from "react-router-dom";
import style from "./Signup.module.css";
export default function Signup() {
  return (
    <div
      className={`${style.bgCustomBackground} w-screen h-screen flex justify-center items-center`}
    >
      <div className="bg-white  e flex flex-col justify-center py-4 px-8 rounded-xl shadow-2xl">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-medium mb-3">Signup</h1>
          <p className="text-color mb-5">
            Enter your information to create an account
          </p>
        </div>

        <Form
          method="post"
          action="/signup"
          className="flex justify-center items-start flex-col "
        >
          <label
            htmlFor="username"
            className="font-medium text-base mb-2 mt-1 shadow-sm"
          >
            User Name
          </label>
          <input
            type="email"
            name="username"
            required
            placeholder="johndeo@gmail.com"
            className={`rounded-lg py-2 px-3 text-lg w-full ${style.textColor} ${style.inputBorder}`}
          />

          <label
            htmlFor="firatname"
            className="font-medium text-base mb-2 shadow-sm"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            required
            placeholder="john"
            className={`rounded-lg py-2 px-3 text-lg w-full ${style.textColor} ${style.inputBorder}`}
          />

          <label
            htmlFor="lastname"
            className="font-medium text-base mb-2 mt-1 shadow-sm"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            required
            placeholder="Deo"
            className={`rounded-lg py-2 px-3 text-lg w-full ${style.textColor} ${style.inputBorder}`}
          />

          <label htmlFor="password" className="font-medium text-base mb-2 mt-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className={`rounded-lg py-2 px-3 text-lg w-full ${style.textColor} ${style.inputBorder}`}
          />
          <button className="w-full bg-black text-white rounded-lg shadow-md mt-2 py-2 text-xl cursor-pointer">
            Signup
          </button>
        </Form>
        <p className="mt-1">
          Already have an account ? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
