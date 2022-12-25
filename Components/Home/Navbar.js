import React from "react";
import Link from "next/link";
import MedicationIcon from "@mui/icons-material/Medication";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleIcon from "@mui/icons-material/Circle";
const image = "https://www.freeiconspng.com/uploads/pills-png-1.png";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div class="flex flex-col">
      <nav class="bg-gradient-to-r from-teal-500 to-cyan-500 border-white-200 px-2 sm:px-4 py-2.5 rounded dark:bg-teal-500 flex flex-col fixed w-screen">
        <div class="container flex flex-col flex-wrap justify-between w-full mt-5">
          <div class="flex md:order-2 mx-10 justify-between w-full">
            <span class="mx-20 self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              InstaMeds
            </span>
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="ml-5 md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class=" block w-96 p-2 pl-10 text-sm text-gray-900 border border-white-300 rounded-lg bg-teal-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-white-900"
                placeholder="Search for medicine..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="px-20 flex items-center justify-between w-1/4">
              <div className="absolute mb-8 ml-5 bg-teal-800 w-6 h-6 rounded-full text-white flex justify-center ">
                {count}
              </div>
              <Link href="/mycart">
                <button className="mr-3w p-3 bg-white">
                  {/* <ShoppingCartIcon
                    class=""
                    style={{ color: "white", fontSize: "30px" }}
                  /> */}
                  mybag
                </button>
              </Link>
              <div class="flex items-center justify-between text-white w-3/4">
                {/* <CircleIcon class="position-relative "/> */}
                <AccountCircleIcon />
                <button>SignIn</button>/<button>SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        class="bg-gradient-to-r from-teal-500 to-cyan-500 mt-16 justify-around hidden w-full md:flex md:w-auto md:order-1 items-center"
        id="navbar-search  "
      >
        {/* <div class=" inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div> */}
        {/* <div class="relative mt-3 md:hidden px-10">
        <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div> */}
        <ul class=" w-1/2 justify-around flex flex p-4 ml-20 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-none">
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
            >
              <div class="flex flex-col items-center ">
                <HomeIcon style={{ color: "white" }} />
                <p style={{ color: "white" }}>Home</p>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <div class="flex flex-col items-center">
                <MedicationIcon style={{ color: "white" }} />
                <p style={{ color: "white" }}>Medicines</p>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <div class="flex flex-col items-center">
                <BuildIcon style={{ color: "white" }} />
                <p style={{ color: "white" }}>Services</p>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <div class="flex flex-col items-center">
                <PermContactCalendarIcon style={{ color: "white" }} />
                <p style={{ color: "white" }}>Doctor</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;