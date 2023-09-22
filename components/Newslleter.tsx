"use client";
import React, { useState } from "react";

const Newslleter = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");

  const handleSubmit = ({ event }: any) => {
    alert(`Name: ${name} \nEmail: ${email} \nMessage: ${message}`);
  };

  return (
    <div className=" bg-[url('/newslleter.png')] h-auto w-screen pt-20 px-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-72">
        <div className=" text-gray-300 text-center md:text-left">
          <h2 className=" text-[26px] ">Newslleter</h2>
          <p className="text-[18px] w-64">
            Get news about articles and updates in your inbox.
          </p>
        </div>
        <form
          className=" flex flex-col justify-center items-center gap-6 relative text-white"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={name}
            // @ts-ignore
            onChange={() => SetName(event?.target?.value)}
            placeholder="NAME"
            className=" bg-inherit outline-none border-b-2 py-1 text-[12px] w-56 px-1 active:border-blue-600"
          />
          <input
            type="email"
            value={email}
            // @ts-ignore
            onChange={() => SetEmail(event?.target?.value)}
            placeholder="EMAIL"
            className=" bg-inherit outline-none border-b-2 py-1 text-[12px] w-56 px-1 active:border-blue-600"
          />
          <input
            type="textarea"
            value={message}
            // @ts-ignore
            onChange={() => SetMessage(event?.target?.value)}
            placeholder="MESSAGE"
            className=" bg-inherit outline-none border-b-2 py-1 text-[12px] w-56 px-1 active:border-blue-600"
          />
          <button
            onSubmit={handleSubmit}
            className=" absolute border-2 border-[#F07E15] rounded-full p-10 py-12 text-[#F07E15] top-40 left-24 md:left-12"
          >
            SEND
          </button>
        </form>
      </div>
      <div className=" text-[50px] text-white font-black md:text-[120px] ">
        <h1 className=" font-['Syne'] tracking-widest	md:leading-8">Get</h1>
        <h1 className=" font-['Syne'] tracking-widest	">IN TOUCH</h1>
      </div>
    </div>
  );
};

export default Newslleter;
