import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
export default function DashboardPage() {
  const loaderData = useLoaderData();
  const balence = loaderData.balence;
  const username = loaderData.user.firstname;
  const users = loaderData.users;

  return <Dashboard balence={balence} username={username} users={users} />;
}

export const loader = async () => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/user/all_User",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
