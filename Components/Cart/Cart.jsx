import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  remove,
} from "../../slices/counterSlice";

function Cart() {
  const count = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();
  // const val = useSelector((state) => state.counter.value);
  return (
    <div className="">
      {
      count.map((e) => (
        <div class="flex bg-white mx-8 mt-10">
          <div className="w-52">
            <img class="w-full" src={e.img} alt="" />
          </div>
          <div className="flex flex-col w-full ml-5">
            <div className="flex justify-between mt-1 ">
              <p class="text-2xl">{e.desc}</p>
              <p class="text-2xl">$ {e.price}</p>
            </div>
            <div className=" my-2">
              <p class="text-teal-500">In stock</p>
              <p>free shipping</p>
            </div>
            <div className="">
              <div className="flex ">
                <button
                  onClick={() => {
                    // e.preventDefault();
                    const varid=e.id
                    const var_price=e.basePrice
                    dispatch(increment({varid,var_price}));
                  }}
                  class="mx-2 text-2xl"
                >
                  +
                </button>
                <button
                  id="dropdownDefault"
                  data-dropdown-toggle="dropdown"
                  class="text-2xl w-25 text-white bg-gray-500 hover:bg-gray-800 focus:ring-4
                     focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-1 py-1 text-center inline-flex items-center dark:bg-gray-500
                      dark:hover:bg-gray-500 dark:focus:ring-gray-300"
                  type="button"
                >
                  Qty
                  <div className="absolute mb-8 ml-5 bg-teal-800 w-6 h-6 rounded-full text-white flex justify-center ">
                    {e.qty}
                  </div>
                </button>
                <button
                  onClick={() => {
                    // e.preventDefault();
                    
                    const varid=e.id
                    const var_price=e.basePrice
                    dispatch(decrement({varid,var_price}));
                  }}
                  class="mx-2 text-2xl"
                >
                  -
                </button>
                <button class="border-2 border-gray-300 rounded-lg px-3 ml-5" onClick={()=>{
                  const varid=e.id
                  const var_price=e.price
                  // const base_p= e.base_price
                  dispatch(remove({varid,var_price}))
                }}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
