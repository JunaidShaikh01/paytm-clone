import React from "react";
import Signup from "../components/Signup/Signup";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function SignupPage() {
  return <Signup />;
}

export const action = async ({ request }) => {
  const data = await request.formData();

  const authData = {
    username: data.get("username"),
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
    password: data.get("password"),
  };

  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
      authData
    );
    localStorage.clear();
    localStorage.setItem("token", data.token);

    return redirect("/");
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};
