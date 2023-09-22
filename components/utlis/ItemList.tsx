import React from "react";

const ItemList = () => {
  return (
    <ul className="flex flex-row md:flex-col text-[15px] font-normal gap-4 md:my-6">
      <li className="cursor-pointer transition-transform transform scale-100 hover:scale-105 active:scale-120 hover:font-bold active:font-bold">
        Apparel
      </li>
      <li className="cursor-pointer transition-transform transform scale-100 hover:scale-105 active:scale-120 hover:font-bold active:font-bold">
        Accessories
      </li>
      <li className="cursor-pointer transition-transform transform scale-100 hover:scale-105 active:scale-120 hover:font-bold active:font-bold">
        Best Sellers
      </li>
      <li className="cursor-pointer transition-transform transform scale-100 hover:scale-105 active:scale-120 hover:font-bold active:font-bold">
        50% off
      </li>
    </ul>
  );
};

export default ItemList;
