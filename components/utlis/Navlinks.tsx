"use client";
import { useState } from "react";

const Navlink = ({ category }: { category: string[] }) => {
  const [drop, setDrop] = useState<boolean>(false);
  return (
    <ul className="flex justify-center  items-center flex-col md:flex-row space-y-6 py-6 md:space-y-0 md:space-x-14 uppercases">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li className=" relative">
        <button
          className="flex items-center gap-2 uppercase"
          onClick={(e) => setDrop(!drop)}
        >
          Our Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            fill="white"
          >
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </button>
        {drop ? (
          <ul className="pt-4 md:absolute flex justify-center md:items-start items-center flex-col md:w-[10em] text-[18px]">
            {category?.map((e, index) => (
              <li key={index} className="  ">
                <a href="#">{e}</a>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>
  );
};

export default Navlink;
