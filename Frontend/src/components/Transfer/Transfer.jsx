import React from "react";
import styles from "./Transfer.module.css";
import { Form, useSearchParams } from "react-router-dom";
export default function Transfer() {
  const [searchParams] = useSearchParams();

  return (
    <div
      className={`${styles.bgCustomBackground} h-screen flex justify-center items-center `}
    >
      <div className="bg-white flex flex-col items-center rounded-xl shadow-lg py-14 px-16 ">
        <div className="flex flex-col items-center">
          <h1 className="font-medium text-4xl">Send Money</h1>

          <div className="flex justify-center my-2">
            <div className="bg-black text-white py-2 px-4 text-2xl rounded-full">
              {" "}
              {searchParams.get("name")?.[0].toUpperCase()}
            </div>
            <div className="py-2 text-2xl ml-2 font-medium">
              {searchParams.get("name")}
            </div>
          </div>
        </div>
        <Form method="post" className="flex flex-col items-center">
          <label htmlFor="amount" className="text-2xl mb-2">
            Enter amount (in Rs.)
          </label>
          <input
            className="border border-black-500 w-full py-1.5 pl-3 mt-2 text-justify text-xl rounded-lg"
            type="number"
            required
            min={1}
            name="amount"
            placeholder="Positive Integer"
          />
          <button className="bg-black text-white mt-4 w-full rounded-lg shadow-lg py-2 text-lg">
            Send Money
          </button>
        </Form>
      </div>
    </div>
  );
}
