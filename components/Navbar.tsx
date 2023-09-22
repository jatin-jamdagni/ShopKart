"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navlink from "./utlis/Navlinks";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [category, setCategory] = useState<string[]>();

  async function categoryData() {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const json = await response.json();
    setCategory(json);
    console.log(category);
  }
  useEffect(() => {
    categoryData();
  }, []);

  return (
    <div className=" sticky top-0 z-50  px-4 md:px-14 bg-black">
      <div className=" relative border-b-2 border-slate-300 w-auto flex justify-between items-center">
        <input
          type="text"
          placeholder="SHOPKART..."
          className=" outline-none border-none text-[32px] bg-black md:w-[20em]  placeholder-slate-300 text-white"
        />
        <Image
          src={"/Star1.png"}
          alt="start1"
          height={25}
          width={25}
          className=" absolute top-[36px] left-52  md:left-96 "
        />
        <button
          className=" md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6ZM20 11H4C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11ZM20 17H4C3.73478 17 3.48043 17.1054 3.29289 17.2929C3.10536 17.4804 3 17.7348 3 18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17Z"
              fill="white"
            />
            <rect x="0.5" y="0.5" width="23" height="23" stroke="white" />
          </svg>
        </button>

        <div className="hidden  md:flex space-x-6 pr-4">
          <span className=" text-white font-['Body_text_14'] text-[14px] font-bold text">
            WISHLIST (0)
          </span>
          <span className="text-white font-['Body_text_14'] text-[14px] font-bold">
            BAG (0)
          </span>
        </div>
      </div>
      {open ? (
        <div className=" text-white md:hidden flex flex-col md:flex-row justify-center items-center w-auto text-[22px] uppercase">
          <Navlink category={category || []} />
        </div>
      ) : (
        ""
      )}
      <div className="hidden md:block text-white uppercase">
        <Navlink category={category || []} />
      </div>
    </div>
  );
};

export default Navbar;
