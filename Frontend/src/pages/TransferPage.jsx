import React from "react";
import Transfer from "../components/Transfer/Transfer";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function TransferPage() {
  return <Transfer />;
}

export const action = async ({ request }) => {
  const data = await request.formData();
  const amount = data.get("amount");

  const searchParams = new URL(request.url).searchParams;
  const id = searchParams.get("id");

  const token = localStorage.getItem("token");

  try {
    const responce = await axios.post(
      //   "http://localhost:3000/api/v1/account/transfer",
      "http://localhost:3000/api/v1/account/transfer",
      { to: id, amount },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log("response", responce);
    return redirect("/dashboard");
  } catch (error) {
    return error.message;
  }
};
