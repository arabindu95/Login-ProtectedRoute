import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {
  return (
    <div>
      <button className="md:flex hidden justify-center gap-2 items-center bg-green-700 hover:bg-green-800 p-2 rounded-md text-white  ">
        <div className="animate-bounce">
          <TiShoppingCart size={24} />
        </div>
        <div>My cart</div>
      </button>
    </div>
  );
};

export default Cart;
