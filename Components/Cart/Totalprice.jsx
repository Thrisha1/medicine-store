import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../../slices/counterSlice'

function Totalprice() {
    
    const dispatch = useDispatch();
    const item = useSelector((state) => state.counter.value);
    const count = useSelector((state) => state.counter.total);

  return (
    <div >
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-white dark:border-gray-700">
        <p class="mb-3 font-normal text-teal-600 dark:text-teal-600">
          order is eligible for FREE delivery
        </p>
        <a href="#">
          <h5 class="mb-4 text-xl font-normal tracking-tight text-gray-900 dark:text-dark">
            Subtotal({item} Items):  $ {count}
          </h5>
        </a>
        <a
          href="/"
          class="w-full inline-flex items-center px-20 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buy Now!
        </a>
        <input type="text" placeholder="EMI option Available -->"class="m-6 px-4 border-2 border-slate-500 rounded"/>
      </div>
    </div>
  );
}

export default Totalprice;
