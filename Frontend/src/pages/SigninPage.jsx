import React from "react";
import Signin from "../components/Signin/Signin";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function SigninPage() {
  return <Signin />;
}

export const action = async ({ request }) => {
  const data = await request.formData();

  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      {
        username: authData.username,
        password: authData.password,
      }
    );

    localStorage.clear();
    localStorage.setItem("token", data.token);
    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};
