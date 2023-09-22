import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" bg-black py-32 md:pt-52 flex md:flex-row flex-col">
      <div className=" w-full md:w-[30%] h-28"></div>

      <div className=" w-full md:w-[80%] h-72 md:h-80 bg-[#f07e15] flex relative z-10">
        <Image
          className=" absolute -top-40 -right-14 h-80 md:h-80 w-auto  md:-top-48 md:right-52"
          src={"/starbig.png"}
          height={365}
          width={372}
          alt="Bigstar"
        />
        <div>
          <h1
            className=" tracking-widest	 absolute left-3 hero-text-1 text-[70px] md:text-[120px] md:-left-52 md:-top-24
          "
          >
            Fresh
          </h1>
          <h1 className=" tracking-widest	absolute hero-text-2 top-20 right-24 text-[70px] md:text-[120px] md:left-0 md:top-8">
            2023
          </h1>
          <h1 className=" tracking-widest	 absolute bottom-6 left-14 hero-text-1 text-[70px] md:text-[120px] md:-left-40 md:bottom-0">
            Look
          </h1>
          <hr className=" z-50 bg-green-800 border-2 bottom-4 w-56 md:w-[37rem] absolute" />
          <Image
            src={"/Star1.png"}
            alt="Star1"
            height={22}
            width={22}
            className=" absolute -bottom-3 md:-bottom-4 h-14 md:h-16 w-10 left-52 z-50 md:left-[35rem] "
          />
        </div>
        <Image
          src={"/character.png"}
          height={655}
          width={432}
          alt="character"
          className=" absolute w-80 h-auto -right-16 -top-40 z-40 mix-blend-multiply md:right-52 md:-top-48 md:w-96"
        />

        <button className=" text-white flex items-center justify-center space-x-2 absolute -bottom-20 left-6 md:-left-80 border-2 px-1">
          <span>See more</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66415 9.29595C7.6683 8.24949 7.66814 7.20275 7.66799 6.15636C7.6679 5.51676 7.6678 4.87729 7.66869 4.23809L7.6692 3.87526L7.41263 4.13182L1.85487 9.68941L1.96094 9.79548L1.85487 9.68941C1.64005 9.90423 1.23453 9.90397 1.01651 9.68596L0.313922 8.98339C0.313911 8.98338 0.3139 8.98337 0.313889 8.98336C0.096074 8.76537 0.0957675 8.36005 0.310613 8.14504C0.310624 8.14502 0.310635 8.14501 0.310646 8.145L5.86837 2.58744L6.1244 2.33142L5.76232 2.33138C5.24959 2.33132 4.70196 2.33179 4.13402 2.33227C3.02993 2.33322 1.84907 2.33423 0.698618 2.33157C0.699919 1.9827 0.700896 1.6612 0.701871 1.34019C0.70303 0.95888 0.704186 0.57825 0.705882 0.15322C2.80036 0.159447 4.88104 0.156514 7.09597 0.153392C7.98874 0.152133 8.90331 0.150844 9.8494 0.150112C9.84225 1.9923 9.844 3.81936 9.84584 5.73654C9.84693 6.88257 9.84806 8.06081 9.84734 9.29372C9.56213 9.2945 9.25322 9.29442 8.93494 9.29435C8.51668 9.29424 8.08224 9.29414 7.66415 9.29595Z"
              fill="white"
              stroke="white"
              stroke-width="0.3"
            />
          </svg>
        </button>
        <div className=" absolute bottom-10 right-20">
          <h4 className=" uppercase text-slate-800 font-medium">
            Oragne Jacket
          </h4>
          <h4 className=" uppercase text-slate-800 font-medium">$ 125</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
