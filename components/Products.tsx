"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ItemList from "./utlis/ItemList";
import Cart from "./utlis/Cart";

const Products = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const [product, setProduct] = useState([]);

  async function productData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setProduct(json);
  }
  useEffect(() => {
    productData();
  }, []);

  // @ts-ignore
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <>
      <div className=" flex justify-between px-2 md:px-20 py-10 ">
        <div className="relative">
          <h1 className="text-[42px] font-bold font-['Syne']">New Products</h1>
          <hr className=" absolute w-96 left-7 border-1 border-black" />
          <Image
            src={"/Star2.png"}
            alt="Star2"
            height={22}
            width={22}
            className=" absolute z-50 top-[3.29rem] md:top-[3.rem] left-2 "
          />
        </div>
        <div className=" md:flex gap-4 hidden">
          <button
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 100, -10);
            }}
            disabled={arrowDisable}
          >
            <svg
              width="56"
              height="6"
              viewBox="0 0 56 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z"
                fill="#161615"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 100, 10);
            }}
          >
            <svg
              width="56"
              height="6"
              viewBox="0 0 56 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z"
                fill="#161615"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-10 items-start">
        <div className=" px-4 md:px-12 md:flex items-center ">
          <ItemList />
        </div>
        <div
          className="flex flex-row overflow-x-scroll w-screen md:w-auto no-scrollbar "
          ref={elementRef}
        >
          {product?.map((item) => (
            // @ts-ignore
            <div key={item?.id} className="">
              <Cart
                // @ts-ignore
                image={item?.image}
                // @ts-ignore
                title={item?.title}
                // @ts-ignore
                description={item?.description}
                // @ts-ignore
                price={item?.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" md:hidden flex justify-center items-center gap-10 py-10">
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          disabled={arrowDisable}
        >
          <svg
            width="56"
            height="6"
            viewBox="0 0 56 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z"
              fill="#161615"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }}
        >
          <svg
            width="56"
            height="6"
            viewBox="0 0 56 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z"
              fill="#161615"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
export default Products;
