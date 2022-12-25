import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../../slices/counterSlice'

function Medicine({name,desc,price,img,id,qty}) {

  const dispatch = useDispatch()
  // const [Value, setValue] = useState(false);

  return (
    <div>
      <div class=" mt-5 w-72 bg-gray-100 border border-none rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700 flex flex-col items-center">
        <a href="#">
          <img
            class="rounded-t-lg object-fit h-48"
            src={img}
            alt=""
            // size="fit"
          />
        </a>
        <div class="p-5 flex flex-col justify-center items-center">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight dark:text-gray text-center">
              {name}
            </h5>
            <h5 class="mb-1 text-lg font-bold tracking-tight dark:text-black text-center">
              {desc}
            </h5>
          </a>
          <span class="flex flex justify-center my-3 font-bold"> 
            <span class="text-gray-500">MRP :</span> 
            <span class="text-pink-600">Rs. {price}</span> 
          </span>
          <a
            onClick={(e) => {
              e.preventDefault();
              dispatch(incrementByAmount({name,desc,price,img,id,qty}))
            }}
            href="#"
            style={{background: 'teal-400'}}
            class="flex w-max justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ADD TO CART
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Medicine;
